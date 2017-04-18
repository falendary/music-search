(function () {

    'use strict';

    var trackService = require('../../services/track.service');


    module.exports = function ($scope, dialogService, data) {

        var vm = this;

        vm.item = data.item;

        vm.getData = function () {

            trackService.getByKey(vm.item.id).then(function (data) {
                vm.itemDetailed = data;
                $scope.$apply();
            })

        };

        vm.getData();

        vm.close = function () {
            dialogService.cancel();
        };

    }

}());