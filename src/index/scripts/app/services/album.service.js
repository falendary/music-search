(function () {

    'use strict';

    var albumRepository = require('../repositories/album.repository');

    var getByKey = function (id) {
        return albumRepository.getByKey(id);
    };

    var getTrackList = function (id) {
        return albumRepository.getTrackList(id);
    };

    module.exports = {
        getByKey: getByKey,
        getTrackList: getTrackList
    }


}());