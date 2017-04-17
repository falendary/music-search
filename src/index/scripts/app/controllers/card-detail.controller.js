(function () {

    'use strict';

    var trackService = require('../services/track.service');
    var albumService = require('../services/album.service');
    var artistService = require('../services/artist.service');

    module.exports = function ($scope, dialogService, data) {

        var vm = this;

        vm.item = data.item;
        vm.itemDetailed = null;

        vm.getData = function () {


            if (vm.item.type == 'track') {
                trackService.getByKey(vm.item.id).then(function (data) {
                    vm.itemDetailed = data;
                    $scope.$apply();
                })
            }

            if (vm.item.type == 'album') {

                albumService.getByKey(vm.item.id).then(function (data) {
                    vm.itemDetailed = data;
                    $scope.$apply();
                })

            }

            if (vm.item.type == 'artist') {

                artistService.getByKey(vm.item.id).then(function (data) {
                    vm.itemDetailed = data;
                    $scope.$apply();
                })

            }

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