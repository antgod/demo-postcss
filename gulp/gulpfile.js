const gulp = require('gulp');
const postcss = require('gulp-postcss');

const myplugin = require('../postcss-plugin-demo');

gulp.task('css', function () {
	return gulp.src('./src/*.css')
		.pipe(postcss( [
			myplugin()
		]))
		.pipe(gulp.dest('./dest'));
});