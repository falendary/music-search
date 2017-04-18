(function () {

    'use strict';

    var searchRepository = require('../repositories/search.repository');

    var getList = function (query, offset) {
        return searchRepository.getList(query, offset).then(function (data) {

            var items = [];

            if (data.hasOwnProperty('albums')) {
                items = items.concat(data.albums.items);
            }
            if (data.hasOwnProperty('artists')) {
                items = items.concat(data.artists.items);
            }
            if (data.hasOwnProperty('tracks')) {
                items = items.concat(data.tracks.items);
            }

            return items;
        })
    };

    module.exports = {
        getList: getList
    }

}());