var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){

  gulp.src('./scss/*scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./'));

});

gulp.task('default',['sass']);
