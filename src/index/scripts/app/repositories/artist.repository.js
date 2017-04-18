(function () {

    'use strict';

    var cookiesService = require('../services/cookie.service');

    var getByKey = function (id) {

        return fetch('https://api.spotify.com/v1/artists/' + id,
            {
                headers: {
                    "Authorization": "Bearer " + cookiesService.getCookie('token'),
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then(function (data) {
            return data.json();
        })

    };

    var getAlbumsList = function (id) {

        var limit = 3;

        return fetch('https://api.spotify.com/v1/artists/' + id + '/albums?album_type=album&limit=' + limit
        //return fetch('https://api.spotify.com/v1/artists/' + id + '/albums?album_type=album'
        ).then(function (data) {
            return data.json();
        })
    };

    module.exports = {
        getByKey: getByKey,
        getAlbumsList: getAlbumsList
    }

}());