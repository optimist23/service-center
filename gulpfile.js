const gulp   		= require('gulp');
//const concat 		= require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('serve', function() {
	browserSync.init({
			server: {
					baseDir: "./"
			}
	});
	browserSync.watch('build',browserSync.reload)
});

gulp.task('sass', function () {
  return gulp.src('./src/sass/style.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('./build/css'))
		.pipe(browserSync.stream());;
});

gulp.task('watch', function() {
	gulp.watch("./*.html").on('change', browserSync.reload);
	gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series(
	gulp.parallel('sass'),
	gulp.parallel('watch','serve')
	));

