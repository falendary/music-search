(function () {

    'use strict';

    var getByKey = function (id) {

        return fetch('https://api.spotify.com//v1/artists/' + id).then(function (data) {
            return data.json();
        })

    };

    module.exports = {
        getByKey: getByKey
    }

}());