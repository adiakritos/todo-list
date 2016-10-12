'use strict';

var gulp  = require('gulp');

var sass        = require('gulp-sass');
var clean_css   = require('gulp-clean-css');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var rename      = require('gulp-rename');
var lint        = require('gulp-jshint');
var babel       = require("gulp-babel");
var sourcemaps  = require("gulp-sourcemaps");
var htmlmin     = require('gulp-htmlmin');

gulp.task('sass',function() {
  return gulp.src('src/scss/*.scss')
    .pipe(sass())
 // .pipe(clean_css({compatibility: 'ie8'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('scripts', function() {
  return gulp.src("src/js/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('html', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch('src/js/*.js', ['scripts']);
  gulp.watch('src/scss/*.scss', ['sass']);
  gulp.watch('src/*.html', ['html']);
});

gulp.task('default', ['sass', 'scripts', 'html', 'watch']);
