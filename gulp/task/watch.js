var gulp = require('gulp'),
browserSync = require('browser-sync').create(),
watch = require('gulp-watch');


gulp.task('watch', function() {
    browserSync.init({
      server:{
        notify:false,
        baseDir:'app'
      }
    })
  
    watch('./app/index.html', function() {
      browserSync.reload();
    });
  
    watch('./app/assets/styles/**/*.css', function() {
      gulp.start('injectCss');
    });
  
  });
  gulp.task('injectCss',['styles'],function(){
     return gulp.src('./app/temp/styles/styles.css')
      .pipe(browserSync.stream());
  });