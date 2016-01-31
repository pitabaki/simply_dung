var gulp = require('gulp'),
	gutil = require('gulp-util'),
	concat = require('gulp-concat'),
	sass = require('gulp-sass');

var jsList = ['missionControl.js','simplydung.js'];

gulp.task('log', function(){
	gutil.log('something, something, darkside');
});

gulp.task('sass', function () {
  gulp.src('../css/dungs_sass.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('jsConcat', function(){
  gulp.src('../js/missionControl.js','../js/simplydung.js')
    .pipe(concat('script.js'))
    .pipe(gulp.dest('../js/'));
});