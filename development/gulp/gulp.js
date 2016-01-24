var gulp = require('gulp'),
	gutil = require('gulp-util'),
	sass = require('gulp-sass');

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