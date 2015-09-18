var postcss = require('gulp-postcss');
var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var mqpacker = require('css-mqpacker');
var csswring = require('csswring');
var cssnext = require('cssnext');
var serve = require('gulp-serve');
var batch = require('gulp-batch');
var livereload = require('gulp-livereload');


gulp.task('css', function () {
    var processors = [
        cssnext(),
        autoprefixer({browsers: ['last 2 version']}),
        mqpacker,
        csswring
    ];
    return gulp.src('./*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dest'))
        .pipe(livereload());
});

gulp.task('html', function(){
  return gulp.src('index.html')
        .pipe(gulp.dest('./dest'))
        .pipe(livereload());
});

gulp.task('serve', serve('./dest'));

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('*.css', ['css']);
    gulp.watch('*.html', ['html']);
});

gulp.task('default', ['css', 'html', 'serve', 'watch']);
