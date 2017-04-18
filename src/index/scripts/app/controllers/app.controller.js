(function () {

    'use strict';

    var searchService = require('../services/search.service');

    module.exports = function ($scope) {

        console.log('init');

        var vm = this;

        vm.items = [];
        vm.searchQuery = '';
        vm.readyStatus = {content: false};


        vm.search = function () {

            console.log('search!');

            vm.readyStatus.content = false;

            searchService.getList(vm.searchQuery).then(function (data) {

                vm.items = vm.items.concat(data);
                vm.readyStatus.content = true;

                $scope.$apply();

            })

        }

    }


}());