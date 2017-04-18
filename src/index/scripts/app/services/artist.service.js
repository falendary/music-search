(function () {

    'use strict';

    var artistService = require('../repositories/artist.repository');

    var getByKey = function (id) {
        return artistService.getByKey(id);
    };

    var getAlbumsList = function (id) {
        return artistService.getAlbumsList(id);
    };

    module.exports = {
        getByKey: getByKey,
        getAlbumsList: getAlbumsList
    }


}());