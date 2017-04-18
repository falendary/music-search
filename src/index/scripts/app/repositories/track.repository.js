(function () {

    'use strict';

    var cookiesService = require('../services/cookie.service');

    var getByKey = function (id) {

        return fetch('https://api.spotify.com/v1/tracks/' + id).then(function (data) {
            return data.json();
        })

    };

    module.exports = {
        getByKey: getByKey
    }

}());