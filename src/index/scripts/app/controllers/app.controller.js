(function () {

    'use strict';

    var searchService = require('../services/search.service');

    module.exports = function ($scope) {

        console.log('init');

        var vm = this;

        vm.items = [];
        vm.searchQuery = '';

        vm.search = function () {

            console.log('search!');

            searchService.getList(vm.searchQuery).then(function (data) {

                vm.items = data;
                $scope.$apply();

            })

        }

    }


}());