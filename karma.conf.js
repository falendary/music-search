//jshint strict: false
module.exports = function (config) {
    config.set({

        basePath: '.',

        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-route/angular-route.js',
            'node_modules/angular-mocks/angular-mocks.js',

            'src/index/scripts/main.js',

            'src/index/scripts/app/controllers/**/*.js',
            'src/index/scripts/app/components/**/*.js',
            'src/index/scripts/app/service/**/*.js'
        ],

        preprocessors: {
            'src/index/scripts/**/*.js': [ 'browserify' ]
        },

        autoWatch: true,

        frameworks: ['jasmine', 'browserify'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-browserify'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};