'use strict';

var path = require('path');
var gulp = require('gulp');
var sftp = require('gulp-sftp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

gulp.task('partials', function () {
    var stream = gulp.src([
            path.join(conf.paths.src, '/app/**/*.html'),
            path.join('!' + conf.paths.src, '/app/main/components/material-docs/demo-partials/**/*.html'),
            path.join(conf.paths.tmp, '/serve/app/**/*.html')
        ])
        .pipe($.htmlmin({
            collapseWhitespace: true,
            maxLineLength: 120,
            removeComments: true
        }))
        .pipe($.angularTemplatecache('templateCacheHtml.js', {
            module: 'fuse',
            root: 'app'
        }))
        .pipe(gulp.dest(conf.paths.tmp + '/partials/'));
    if (conf.server.sync) {
        stream = stream.pipe(sftp({
            host: conf.server.host,
            user: conf.server.user,
            pass: conf.server.pass,
            remotePath: conf.server.path
        }));
    }
    return stream;

});

gulp.task('html', ['inject', 'partials'], function () {
    var partialsInjectFile = gulp.src(path.join(conf.paths.tmp, '/partials/templateCacheHtml.js'), {read: false});
    var partialsInjectOptions = {
        starttag: '<!-- inject:partials -->',
        ignorePath: path.join(conf.paths.tmp, '/partials'),
        addRootSlash: false
    };

    var cssFilter = $.filter('**/*.css', {restore: true});
    var jsFilter = $.filter('**/*.js', {restore: true});
    var htmlFilter = $.filter('*.html', {restore: true});

    var stream = gulp.src(path.join(conf.paths.tmp, '/serve/*.html'))
        .pipe($.inject(partialsInjectFile, partialsInjectOptions))
        .pipe($.useref())
        .pipe(jsFilter)
        .pipe($.sourcemaps.init())
        .pipe($.ngAnnotate())
        // .pipe($.uglify({preserveComments: $.uglifySaveLicense})).on('error', conf.errorHandler('Uglify'))
        .pipe($.rev())
        .pipe($.sourcemaps.write('maps'))
        .pipe(jsFilter.restore)
        .pipe(cssFilter)
        .pipe($.sourcemaps.init())
        .pipe($.cleanCss())
        .pipe($.rev())
        .pipe($.sourcemaps.write('maps'))
        .pipe(cssFilter.restore)
        .pipe($.revReplace())
        .pipe(htmlFilter)
        .pipe($.htmlmin({
            collapseWhitespace: true,
            maxLineLength: 120,
            removeComments: true
        }))
        .pipe(htmlFilter.restore)
        .pipe(gulp.dest(path.join(conf.paths.dist, '/')));
    if (conf.server.sync) {
        stream = stream.pipe(sftp({
            host: conf.server.host,
            user: conf.server.user,
            pass: conf.server.pass,
            remotePath: conf.server.path,
            timeout: conf.server.timeout
        }));
    }
    stream = stream.pipe($.size({
        title: path.join(conf.paths.dist, '/'),
        showFiles: true
    }));

    return stream;
});

// Only applies for fonts from bower dependencies
// Custom fonts are handled by the "other" task
gulp.task('fonts', function () {
    var stream = gulp.src($.mainBowerFiles())
        .pipe($.filter('**/*.{eot,svg,ttf,woff,woff2}'))
        .pipe($.flatten())
        .pipe(gulp.dest(path.join(conf.paths.dist, '/fonts/')))
    if (conf.server.sync) {
        stream = stream.pipe(sftp({
            host: conf.server.host,
            user: conf.server.user,
            pass: conf.server.pass,
            remotePath: conf.server.path,
            timeout: conf.server.timeout
        }));
    }
    return stream;

});

gulp.task('other', function () {
    var fileFilter = $.filter(function (file) {
        return file.stat.isFile();
    });

    var stream = gulp.src([
            path.join(conf.paths.src, '/**/*'),
            path.join('!' + conf.paths.src, '/**/*.{html,css,js,scss}')
        ])
        .pipe(fileFilter)
        .pipe(gulp.dest(path.join(conf.paths.dist, '/')));
    if (conf.server.sync) {
        stream = stream.pipe(sftp({
            host: conf.server.host,
            user: conf.server.user,
            pass: conf.server.pass,
            remotePath: conf.server.path,
            timeout: conf.server.timeout
        }));
    }
    return stream;
});

// Move demo-partials directory for material-docs
gulp.task('material-docs', function () {
    var fileFilter = $.filter(function (file) {
        return file.stat.isFile();
    });

    var stream = gulp.src([
            path.join(conf.paths.src, '/app/main/components/material-docs/demo-partials/**/*')
        ])
        .pipe(fileFilter)
        .pipe(gulp.dest(path.join(conf.paths.dist, '/app/main/components/material-docs/demo-partials/')));

    if (conf.server.sync) {
        stream = stream.pipe(sftp({
            host: conf.server.host,
            user: conf.server.user,
            pass: conf.server.pass,
            remotePath: conf.server.path,
            timeout: conf.server.timeout
        }));
    }

    return stream;

});

gulp.task('clean', function () {
    return $.del([path.join(conf.paths.dist, '/'), path.join(conf.paths.tmp, '/')]);
});

gulp.task('build', ['html', 'fonts', 'other', 'material-docs']);
