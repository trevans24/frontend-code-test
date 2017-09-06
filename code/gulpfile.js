// Setup
const gulp = require('gulp');
const sass = require('gulp-sass');

// Default Task
gulp.task('default', () => {
  console.log('Default Task');
  gulp.watch('src/**/*.scss', ['styles']);
});

// Styles task
gulp.task('styles', () => {
  gulp.src('src/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./public/'));
});
