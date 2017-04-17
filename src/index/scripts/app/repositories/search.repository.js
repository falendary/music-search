/**
 * Created by szhitenev on 17.04.2017.
 */
(function () {

    'use strict';

    var getList = function (query) {

        return fetch('https://api.spotify.com/v1/search?type=album,track,artist&limit=4&q=' + query).then(function (data) {
            return data.json();
        })


    };


    module.exports = {
        getList: getList
    }


}());