(function () {

    'use strict';

    var trackService = require('../repositories/track.repository');

    var getByKey = function (id) {
        return trackService.getByKey(id);
    };

    module.exports = {
        getByKey: getByKey,
    }


}());