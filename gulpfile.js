var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('copy', function() {
	gulp.src([
			'./bower_components/openui5-sap.m/resources/**/*',
			'./bower_components/openui5-sap.ui.core/resources/**/*',
			'./bower_components/openui5-themelib_sap_bluecrystal/resources/**/*'])
		.pipe(gulp.dest('./webapp/resources'));
});

gulp.task('serve', function() {
	gulp.src('./webapp')
	.pipe(webserver({
		livereload: true,
		directoryListing: false,
		open: true,
	}));
});