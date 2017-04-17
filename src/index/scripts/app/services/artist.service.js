(function () {

    'use strict';

    var artistService = require('../repositories/artist.repository');

    var getByKey = function (id) {
        return artistService.getByKey(id);
    };

    module.exports = {
        getByKey: getByKey
    }


}());