/**
 * Created by s.zhitenev on 22.07.2015.
 *
 */

(function () {

    "use strict";
    var gulp = require('gulp');
    var requireDir = require('require-dir');
    var dir = requireDir('./gulptasks');

    gulp.task('default', ['core-min-All', 'index-min-All']);

}());