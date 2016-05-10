var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var autoprefixer = require('gulp-autoprefixer');

// Error message for gulp-plumber
var plumberErrorHandler = { errorHandler: notify.onError({
  title: 'Gulp',
  message: 'Error: <%= error.message %>, Fix it you fool!'
  })
};

// Sass Task
gulp.task('sass', function(){
  gulp.src('./scss/*scss')
    .pipe(plumber(plumberErrorHandler))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
    }))
    .pipe(sass({outputStyle: 'nested'}))
    .pipe(gulp.dest('./'));
});

//Img Optimization task
gulp.task('img', function(){
  gulp.src('img/src/*.{png,jpg,gif}')
    .pipe(plumber(plumberErrorHandler))
    .pipe(imagemin({
      optimizationLevel: 7,
      progressive: true
    }))
    .pipe(gulp.dest('img'));
});

//Watch task
gulp.task('watch', function(){
  gulp.watch('./scss/*scss',['sass']);
  gulp.watch('img/src/*.{png,jpg,gif}',['img']);
});

gulp.task('default',['sass','watch']);
