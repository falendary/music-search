(function () {
    'use strict';

    // Include gulp
    var gulp = require('gulp');

    // main
    var livereload = require('gulp-livereload');
    var plumber = require('gulp-plumber');
    var rename = require('gulp-rename');
    var preprocess = require('gulp-preprocess');
    var source = require('vinyl-source-stream');
    var streamify = require('gulp-streamify');
    var buffer = require('vinyl-buffer');
    var fs = require('fs');
    var path = require('path');
    var stripDebug = require('gulp-strip-debug');

    // css, less
    var autoprefixer = require('autoprefixer');
    var minifyCSS = require('gulp-minify-css');
    var less = require('gulp-less');
    var postcss = require('gulp-postcss');
    var csslint = require('gulp-csslint');

    // js
    var browserify = require('browserify');
    var uglify = require('gulp-uglify');
    var concat = require('gulp-concat');

    // html
    var htmlmin = require('gulp-htmlmin');
    var ngHtml2Js = require('gulp-ng-html2js');
    var replace = require('gulp-replace');

    var appName = 'index';

    gulp.task(appName + '-min-IndexHTML', function () {

        var pathToIndex = 'src/index.html';

        return gulp.src(pathToIndex)
            .pipe(replace(/{date}/g, new Date().getTime()))
            .pipe(htmlmin({collapseWhitespace: true}))
            .pipe(gulp.dest('dist/'));

    });

    gulp.task(appName + '-min-TS-JS', function () {

        console.log('Executing task index-TS-JS...');

        var pathToTS = ['src/' + appName + '/scripts/main.ts'];

        return browserify()
            .add(pathToTS)
            .plugin('tsify', {noImplicitAny: true})
            .bundle()
            .on('error', function (error) {
                console.error(error.toString());
            })
            .pipe(plumber())
            .pipe(source('main.min.js'))
            .pipe(streamify(uglify()))
            .pipe(gulp.dest('dist/' + appName + '/scripts'))
            .pipe(livereload());

    });


    gulp.task(appName + '-min-JS', /*[appName + '-min-Dependencies'], */function () {

        var pathToJSApp =
            ['src/' + appName + '/scripts/main.js'];

        return browserify(pathToJSApp)
            .bundle()
            .on('error', function (err) {
                console.error('Error in Browserify: \n', err.message);
                this.emit('end');
            })
            .pipe(plumber())
            .pipe(source('bundled.js'))
            .pipe(buffer())
            .pipe(preprocess())
            //.pipe(uglify())
            .pipe(rename({basename: 'main', suffix: '.min'}))
            .on('error', function (error) {
                console.error('\nError on JS minification: \n', error.toString());
                this.emit('end');
            })
            .pipe(gulp.dest('dist/' + appName + '/scripts/'))
            .pipe(livereload());
    });

    gulp.task(appName + '-HTML-to-JS', function () {

        console.log('Executing task index-HTML-templateCache...');

        var modulesDir = 'src/';

        var getModules = function (dir) {
            return fs.readdirSync(dir)
                .filter(function (file) {
                    return fs.statSync(path.join(dir, file)).isDirectory();
                });
        };

        var modules = getModules(modulesDir);
        var moduleTasks = modules.map(function (folder) {
            return gulp.src(modulesDir + folder + '/scripts/app/**/*.html', {basedir: '.'})
                .pipe(htmlmin({collapseWhitespace: true}))
                .on('error', function (error) {
                    console.error('\nError on HTML minifaction: \n', error.toString());
                    this.emit('end');
                })
                .pipe(ngHtml2Js({
                    moduleName: folder
                }))
                .pipe(concat('templates.min.js'))
                .pipe(uglify())
                .pipe(gulp.dest(modulesDir + folder + '/scripts/'));
        });
    });

    gulp.task(appName + '-min-LESS', function () {

        var pathToLess = ['src/' + appName + '/content/less/imports.less'];

        var plugins = [
            autoprefixer({browsers: ['last 1 version']})
        ];

        return gulp.src(pathToLess)
            .pipe(less())
            .on('error', function (err) {
                console.error('Error in Browserify: \n', err.message);
                this.emit('end');
            })
            .pipe(plumber())
            .pipe(postcss(plugins))
            .pipe(minifyCSS())
            .pipe(rename('main.min.css'))
            .pipe(gulp.dest('dist/' + appName + '/content/css/'));

    });

    gulp.task(appName + '-min-IMG', function () {

        var pathToImg = [
            'src/' + appName + '/content/**/*.{jpg,gif,png,ico,svg}'
        ];

        return gulp.src(pathToImg)
            .pipe(gulp.dest('dist/' + appName + '/content/'));
    });

    gulp.task(appName + '-min-Fonts', function () {

        var pathToFonts = [
            'src/' + appName + '/content/fonts/**/*.{eot,woff,ttf,woff2,otf}'
        ];

        return gulp.src(pathToFonts)
            .pipe(gulp.dest('dist/' + appName + '/content/fonts/'));
    });

    gulp.task(appName + '-min-All', [
        appName + '-min-IndexHTML',
        appName + '-HTML-to-JS',
        appName + '-min-Fonts',
        appName + '-min-LESS',
        appName + '-min-JS',
        appName + '-min-IMG'
    ]);

    // Watchers
    gulp.task(appName + '-watch-min', [appName + '-min-All'], function () {
        livereload.listen({port: 9091});
        gulp.watch('src/**/*.less', [appName + '-min-LESS']);
        gulp.watch('src/**/*.js', [appName + '-min-JS']);
        gulp.watch('src/**/*.html', [appName + '-HTML-to-JS', appName + '-min-IndexHTML', appName + '-min-JS']);
    });

}());