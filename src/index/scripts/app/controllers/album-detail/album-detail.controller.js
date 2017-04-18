(function () {

    'use strict';

    var albumService = require('../../services/album.service');

    module.exports = function ($scope, dialogService, data) {

        var vm = this;

        vm.item = data.item;
        vm.tracks = null;

        vm.getData = function () {

            albumService.getTrackList(vm.item.id).then(function (data) {
                vm.tracks = data.items;
                $scope.$apply();
            })

        };

        vm.getData();

        vm.close = function () {
            dialogService.cancel();
        };

        console.log('$scope', $scope);
        console.log('data', data);
        console.log('dialogService', dialogService);
        console.log('vm', vm);

    }

}());