const gulp = require('gulp');
const gulpsass = require('gulp-sass');
const sass = gulpsass(require('sass'));

gulp.task('sass', async function () {
  gulp.src('src/index.scss').pipe(sass()).pipe(gulp.dest('src/css'));
  gulp.src('src/components/**/*.scss').pipe(sass()).pipe(gulp.dest('src/css'));
});
