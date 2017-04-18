(function () {

    'use strict';

    var cookiesService = require('../services/cookie.service');

    var getByKey = function (id) {

        return fetch('https://api.spotify.com/v1/albums/' + id,
            {
                headers: {
                    "Authorization": "Bearer " + cookiesService.getCookie('token'),
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then(function (data) {
            return data.json();
        })

    };

    var getTrackList = function (id) {
        return fetch('https://api.spotify.com/v1/albums/' + id + '/tracks').then(function (data) {
            return data.json();
        })
    };

    module.exports = {
        getByKey: getByKey,
        getTrackList: getTrackList
    }

}());