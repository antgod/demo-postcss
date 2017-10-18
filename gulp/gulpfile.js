const gulp = require('gulp');
const postcss = require('gulp-postcss');

const myplugin = require('../postcss-plugin-demo');
const processors = [ myplugin() ]

gulp.task('css', function () {
	return gulp.src('./src/*.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest('./dest'));
});