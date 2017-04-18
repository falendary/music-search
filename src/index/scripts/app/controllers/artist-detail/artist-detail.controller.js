(function () {

    'use strict';


    var artistService = require('../../services/artist.service');

    module.exports = function ($scope, dialogService, data) {

        var vm = this;

        vm.item = data.item;
        vm.albums = null;

        vm.getData = function () {

            artistService.getAlbumsList(vm.item.id).then(function (data) {
                vm.albums = data.items;
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