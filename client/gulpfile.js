const gulp = require('gulp');
const gulpsass = require('gulp-sass');
const sass = gulpsass(require('sass'));

gulp.task('sass', async function () {
  gulp.src('src/*.scss').pipe(sass()).pipe(gulp.dest('src/css'));
});
