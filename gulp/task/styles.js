var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    plumber = require('gulp-plumber'),
    mixins = require('postcss-mixins'),
    simplevar = require('postcss-simple-vars');


gulp.task('styles', function () {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(plumber())
        .pipe(postcss([cssImport, mixins,nested, cssvars,simplevar,  autoprefixer]))


        .pipe(gulp.dest('./app/temp/styles'));
});