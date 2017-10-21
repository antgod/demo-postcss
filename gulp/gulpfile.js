const gulp = require('gulp')
const postcss = require('gulp-postcss')
const config = require('./package.json')
const myplugin = require('../postcss-plugin-demo')

const processors = [ myplugin(config.myConfig) ]

gulp.task('css', function () {
	return gulp.src('./src/*.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest('./dest'));
});