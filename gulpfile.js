const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');

gulp.task('minify:html-root', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(gulp.dest('dist'));
});

gulp.task('minify:html', function() {
  return gulp.src('src/pages/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(gulp.dest('dist/pages'));
});

gulp.task('minify:css', function() {
  return gulp.src('src/styles/**/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('minify:js', function() {
  return gulp.src('src/scripts/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'));
});

gulp.task('minify', gulp.parallel('minify:html', 'minify:css', 'minify:js', 'minify:html-root'));
