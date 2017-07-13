'use strict';

var path = require('path');
var gulp = require('gulp');
var sftp = require('gulp-sftp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;
var _ = require('lodash');

gulp.task('styles-reload-dev', function () {
    return buildDynamicStylesDev()
        .pipe(browserSync.stream());
});

gulp.task('styles-dev', function () {
    return buildStylesDev();
});

var buildDynamicStylesDev = function () {
    var sassOptions = {
        style: 'expanded'
    };

    var injectFiles = gulp.src([
        path.join('bower_components/angular-material/angular-material.scss'),
        path.join(conf.paths.src, '/app/main/view.scss'),
        path.join(conf.paths.src, '/app/main/**/*.scss'),
        path.join(conf.paths.src, '/app/main/views/**/*.scss'),
        path.join('!' + conf.paths.src, '/app/core/scss/**/*.scss'),
        path.join('!' + conf.paths.src, '/app/core/**/*.scss'),
        path.join('!' + conf.paths.src, '/app/main/components/material-docs/demo-partials/**/*.scss'),
        path.join('!' + conf.paths.src, '/app/core/scss/partials/**/*.scss'),
        path.join('!' + conf.paths.src, '/app/index.scss')
    ]);

    var injectOptions = {
        transform: function (filePath) {
            console.log(filePath);
            filePath = filePath.replace(conf.paths.src + '/app/', '');
            return '@import "' + filePath + '";';
        },
        starttag: '// injector',
        endtag: '// endinjector',
        addRootSlash: false
    };

    var stream = gulp.src([
        path.join(conf.paths.src, '/app/zpp.scss')
    ])
        .pipe($.inject(injectFiles, injectOptions))
        .pipe(wiredep(_.extend({}, conf.wiredep)))
        .pipe($.sourcemaps.init())
        .pipe($.sass(sassOptions)).on('error', conf.errorHandler('Sass'))
        .pipe($.autoprefixer()).on('error', conf.errorHandler('Autoprefixer'))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app/')));

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

};

var buildStylesDev = function () {
    var sassOptions = {
        style: 'expanded'
    };

    var injectFiles = gulp.src([
        path.join(conf.paths.src, '/app/core/scss/**/*.scss'),
        path.join(conf.paths.src, '/app/core/**/*.scss'),
        path.join(conf.paths.src, '/app/**/*.scss'),
        path.join('!' + conf.paths.src, '/app/main/view.scss'),
        path.join('!' + conf.paths.src, '/app/main/**/*.scss'),
        path.join('!' + conf.paths.src, '/app/main/components/material-docs/demo-partials/**/*.scss'),
        path.join('!' + conf.paths.src, '/app/core/scss/partials/**/*.scss'),
        path.join('!' + conf.paths.src, '/app/index.scss'),
        path.join('!' + conf.paths.src, '/app/zpp.scss')
    ]);

    var injectFiles2 = gulp.src([
        path.join('bower_components/angular-material/angular-material.scss'),
        path.join(conf.paths.src, '/app/main/view.scss'),
        path.join(conf.paths.src, '/app/main/**/*.scss'),
        path.join('!' + conf.paths.src, '/app/core/scss/**/*.scss'),
        path.join('!' + conf.paths.src, '/app/core/**/*.scss'),
        path.join('!' + conf.paths.src, '/app/main/components/material-docs/demo-partials/**/*.scss'),
        path.join('!' + conf.paths.src, '/app/core/scss/partials/**/*.scss'),
        path.join('!' + conf.paths.src, '/app/index.scss'),
        path.join('!' + conf.paths.src, '/app/zpp.scss')
    ]);

    var injectOptions = {
        transform: function (filePath) {
            console.log(filePath);
            filePath = filePath.replace(conf.paths.src + '/app/', '');
            return '@import "' + filePath + '";';
        },
        starttag: '// injector',
        endtag: '// endinjector',
        addRootSlash: false
    };

    gulp.src([
        path.join(conf.paths.src, '/app/zpp.scss')
    ])
        .pipe($.inject(injectFiles2, injectOptions))
        .pipe(wiredep(_.extend({}, conf.wiredep)))
        .pipe($.sourcemaps.init())
        .pipe($.sass(sassOptions)).on('error', conf.errorHandler('Sass'))
        .pipe($.autoprefixer()).on('error', conf.errorHandler('Autoprefixer'))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app/')));

    var stream = gulp.src([
        path.join(conf.paths.src, '/app/index.scss')
    ])
        .pipe($.inject(injectFiles, injectOptions))
        .pipe(wiredep(_.extend({}, conf.wiredep)))
        .pipe($.sourcemaps.init())
        .pipe($.sass(sassOptions)).on('error', conf.errorHandler('Sass'))
        .pipe($.autoprefixer()).on('error', conf.errorHandler('Autoprefixer'))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app/')));

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
};