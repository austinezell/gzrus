const gulp = require('gulp');
const sass = require('gulp-sass');
const prefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean-css');

gulp.task('default', ['sass', 'watch']);
gulp.task('dev', ['sass']);


gulp.task('sass', function(done){
  gulp.src('./sass/style.scss')
  .pipe(sass())
  .on('error', sass.logError)
  .pipe(prefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(clean())
  .pipe(gulp.dest('./styles/'))
  .on('end', done)
});

gulp.task('watch', function(){
  gulp.watch('./sass/**/*.scss', ['sass'])
})
