(function () {
	'use strict';

	var gulp = require('gulp');

	var minifyCSS = require('gulp-minify-css');
	var replace = require('gulp-replace');
	var rename = require('gulp-rename');
	var uglify = require('gulp-uglify');
	var concat = require('gulp-concat');

	var preprocess = require('gulp-preprocess');
	var source = require('vinyl-source-stream');
	var streamify = require('gulp-streamify');
	var buffer = require('vinyl-buffer');

	// html
	var htmlmin = require('gulp-htmlmin');
	var ngHtml2Js = require('gulp-ng-html2js');

	var browserify = require('browserify');
	var plumber = require('gulp-plumber');

	//css
	var autoprefixer = require('gulp-autoprefixer');
	var csslint = require('gulp-csslint');

	var appName = 'core';

	gulp.task(appName +'-min-Angular-JS', function () {

		var pathToJS = [
			'node_modules/angular/angular.js',
			'node_modules/angular-animate/angular-animate.js',
			'node_modules/angular-aria/angular-aria.js',
			'node_modules/angular-sanitize/angular-sanitize.js'
		];

		return gulp.src(pathToJS)
			.pipe(concat('angular.min.js'))
			.pipe(uglify({mangle: false}))
			.pipe(gulp.dest('dist/' + appName + '/scripts/'));
	});

	gulp.task(appName + '-min-jQuery-JS', function () {

		var pathToJS = [
			'node_modules/jquery/dist/jquery.js'
			//'bower_components/jquery-ui/jquery-ui.js'
		];

		return gulp.src(pathToJS)
			.pipe(concat('jquery.js'))
			.pipe(uglify())
			.pipe(rename({suffix: '.min'}))
			.pipe(gulp.dest('dist/' + appName + '/scripts/'));
	});

	gulp.task(appName + '-min-CoreJS-JS', function () {

		var pathToJS = [
			'node_modules/core-js/client/core.js'
		];

		return gulp.src(pathToJS)
			.pipe(concat('corejs.min.js'))
			.pipe(uglify())
			.pipe(gulp.dest('dist/' + appName + '/scripts/'));
	});

	gulp.task(appName + '-min-fetch-JS', function () {

		var pathToJS = [
			'node_modules/whatwg-fetch/fetch.js'
		];

		return gulp.src(pathToJS)
			.pipe(concat('fetch.min.js'))
			.pipe(uglify())
			.pipe(gulp.dest('dist/' + appName + '/scripts/'));
	});

	gulp.task(appName + '-min-font-awesome-CSS', function () {

		var pathToCSS = [
			'node_modules/font-awesome/css/font-awesome.css'
		];

		return gulp.src(pathToCSS)
			.pipe(concat('font-awesome.min.css'))
			.pipe(minifyCSS({keepBreaks: false, keepSpecialComments: false}))
			.pipe(gulp.dest('dist/' + appName + '/content/css/'));
	});

	gulp.task(appName + '-min-SASS', function () {

		var pathToSASS = [
			'src-front/' + appName + '/content/scss/imports.scss'
		];

		return gulp.src(pathToSASS)
			.pipe(sass())
			.on('error', function (error) {
				console.error('\nError on SASS compilation: \n', error.toString());
				this.emit('end');
			})
			.pipe(autoprefixer({
				browsers: ['last 10 versions'],
				cascade: false
			}))
			.pipe(csslint())
			.pipe(minifyCSS({keepBreaks: false, keepSpecialComments: false}))
			.pipe(rename({basename: 'core', suffix: '.min', extname: '.css'}))
			.pipe(gulp.dest('dist/' + appName + '/content/css/'));
	});

	gulp.task(appName + '-min-Fonts', function () {

		var pathToFonts = [
			'src-front/' + appName + '/content/fonts/*.{eot,woff,ttf,woff2,otf}'
		];

		return gulp.src(pathToFonts)
			.pipe(gulp.dest('dist/' + appName + '/content/fonts/'));
	});

	gulp.task(appName + '-min-font-awesome-fonts', function () {

		var pathToFonts = [
			'node_modules/font-awesome/fonts/*'
		];

		return gulp.src(pathToFonts)
			.pipe(gulp.dest('dist/' + appName + '/content/fonts/'));
	});


	gulp.task(appName + '-min-All', [
		appName + '-min-Angular-JS',
		appName + '-min-jQuery-JS',
		appName + '-min-CoreJS-JS',
		appName + '-min-fetch-JS',
		appName + '-min-font-awesome-CSS',
		appName + '-min-font-awesome-fonts'
	]);

}());