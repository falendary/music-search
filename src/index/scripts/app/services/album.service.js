(function () {

    'use strict';

    var albumRepository = require('../repositories/album.repository');

    var getByKey = function (id) {
        return albumRepository.getByKey(id);
    };

    module.exports = {
        getByKey: getByKey
    }


}());