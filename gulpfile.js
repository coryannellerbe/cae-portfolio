var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./sass/custom.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'));
  });

  // Gulp Watch
  gulp.task('sass:watch', function () {
    gulp.watch('./sass/custom.scss', ['sass']);
  });