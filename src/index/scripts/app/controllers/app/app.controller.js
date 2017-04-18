(function () {

    'use strict';

    var searchService = require('../../services/search.service');

    module.exports = function ($scope) {

        console.log('init');

        var vm = this;

        vm.items = [];
        vm.searchQuery = '';
        vm.contentLoader = false;
        vm.currentOffset = 0;
        vm.offset = 4;

        vm.search = function () {

            console.log('search!');

            vm.contentLoader = true;

            vm.currentOffset = 0;

            searchService.getList(vm.searchQuery, vm.currentOffset).then(function (data) {

                vm.items = data;
                vm.contentLoader = false;

                $scope.$apply();

            })

        };

        vm.searchTrigger = function ($event) {
            if ($event.keyCode == 13) {
                vm.search();
            }
        };

        vm.loadMore = function () {

            vm.contentLoader = true;
            vm.currentOffset = vm.currentOffset + vm.offset;

            searchService.getList(vm.searchQuery, vm.currentOffset).then(function (data) {

                vm.items = vm.items.concat(data);
                vm.contentLoader = false;

                $scope.$apply();

            })
        }

    }


}());