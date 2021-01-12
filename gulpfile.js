const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-css');
const concat = require('gulp-concat');
const minify = require('gulp-minify');

function scss() {
  return src('frontend/scss/app.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(dest('static/website/css'))
}

function js() {
  return src('frontend/js/*.js')
    .pipe(concat('app.js'))
    .pipe(minify())
    .pipe(dest('static/website/js'))
}

exports.default = function() {
  watch('frontend/scss/*', scss);
  watch('frontend/js/*', js);
};
