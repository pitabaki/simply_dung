var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee'),
	concat = require('gulp-concat'),
	sass = require('gulp-sass'),
	minify = require('gulp-minify'),
	directory = ['exist.html', 'email_design.html', 'resume.html', 'social_media.html'];

var jsSources = ['js/missionControl.js','js/simplydung.js'],
	jsMinify = ['js/dung_scripts.js','js/jquery-2.1.4.js']
gulp.task('coffee', function(){
	gulp.src('development/coffee/tagline.coffee')
		.pipe(coffee({bare:true})
			.on('error', gutil.log))
		.pipe(gulp.dest('js'));
});

gulp.task('directory', function(){
	gulp.src(directory)
		.pipe(gulp.dest('directory'));

});

gulp.task('sass', function () {
  gulp.src('css/dungs_sass.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

/*
gulp.task('jsConcat', function(){
  return gulp.src('js/missionControl.js','js/simplydung.js')
    .pipe(concat('script.js'))
    .pipe(gulp.dest('js'));
});*/
 

gulp.task('jsConcat', function() {
  gulp.src(jsSources)
    .pipe(concat('dung_scripts.js'))
    .pipe(gulp.dest('js'));
});

gulp.task('minify-js', function() {
  gulp.src(jsMinify)
    .pipe(minify())
    .pipe(gulp.dest('js'))
});