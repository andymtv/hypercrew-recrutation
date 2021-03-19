const gulp = require('gulp');
const sass = require('gulp-sass');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');

gulp.task('sass',function(){
    return gulp.src('assets/sass/**/*.scss')
        .pipe( sass().on('error', sass.logError) )
        .pipe( autoprefixer({
            browsers: ['last 20 versions']
        }))
        .pipe(cleanCSS())
        .pipe( gulp.dest('stylesheets') )
    ;
});

gulp.task('less',function(){
    return gulp.src('assets/sass/**/*.less')
        .pipe( less().on('error', less.logError) )
        .pipe( autoprefixer({
            browsers: ['last 20 versions']
        }))
        .pipe(cleanCSS())
        .pipe( gulp.dest('stylesheets') )
    ;
});

gulp.task('js', function() {
    return gulp.src('assets/js/**/*.js')
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('javascripts'));
});


gulp.task('watch', gulp.series(['sass', 'less'], function () {
    gulp.watch('assets/js/**/*.js', gulp.series(['js']));
    gulp.watch('assets/sass/**/*.scss', gulp.series(['sass']));
    gulp.watch('assets/less/**/*.scss', gulp.series(['less']));
}));

gulp.task('build', gulp.series(['js', 'sass', 'less']));

gulp.task('default',gulp.series(['watch']));