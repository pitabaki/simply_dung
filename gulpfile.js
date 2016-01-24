var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee'),
	sass = require('gulp-sass'),
	directory = ['exist.html', 'email_design.html', 'resume.html', 'social_media.html'];

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