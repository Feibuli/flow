'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

gulp.task('scripts-reload-dev', function ()
{
    return buildScriptsDev()
        .pipe(browserSync.stream());
});

gulp.task('scripts-dev', function ()
{
    return buildScriptsDev();
});

function buildScriptsDev()
{
    return gulp.src(path.join(conf.paths.src, '/app/**/*.js'))
        // Enable the following two lines if you want linter
        // to check your code every time the scripts reloaded
        //.pipe($.eslint())
        //.pipe($.eslint.format())
        .pipe($.size())
};
