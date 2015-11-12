var gulp = require('gulp')
var rename = require('gulp-rename')
var browserify = require('gulp-browserify')
var mochaPhantomJS = require('gulp-mocha-phantomjs')

gulp.task('js-test', function () {
    gulp.src('./test/test.js', {read: false})
        .pipe(browserify())
        .pipe(rename('bundle-test.js'))
        .pipe(gulp.dest('./build'))
})

gulp.task('test', ['js-test'], function () {
    return gulp
    .src('test/runner.html')
    .pipe(mochaPhantomJS())
})

gulp.task('default', ['test'])
