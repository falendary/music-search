(function () {

    'use strict';

    var searchRepository = require('../repositories/search.repository');

    var getList = function (query) {
        return searchRepository.getList(query).then(function (data) {

            var items = [];

            items = items.concat(data.albums.items);

            items = items.concat(data.artists.items);

            items = items.concat(data.tracks.items);

            console.log('items', items);

            return items;
        })
    };

    module.exports = {
        getList: getList
    }

}());