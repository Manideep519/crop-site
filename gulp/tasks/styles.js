var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssimport = require('postcss-import'),
vars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
mixins = require('postcss-mixins');


gulp.task('styles', function(){
	return gulp.src('./app/temp/styles.css')
	.pipe(postcss([cssimport, mixins, vars, nested, autoprefixer]))
	.on('error', function(errorInfo){
		console.log(errorInfo.toString());
		this.emit('end');
	})
	.pipe(gulp.dest('./app/styles/'));
});