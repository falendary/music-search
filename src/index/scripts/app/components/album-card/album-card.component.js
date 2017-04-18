(function () {

    'use strict';

    module.exports = {
        bindings: {
            "item": "="
        },
        templateUrl: 'components/album-card/album-card.component.html',
        controllerAs: 'vm',
        controller: ['$scope', 'dialogService', function ($scope, dialogService) {

            var vm = this;

            vm.openDialog = function ($event) {

                dialogService.show({
                    templateUrl: 'controllers/album-detail/album-detail.controller.html',
                    controllerAs: 'AlbumDetailController as vm',
                    locals: {
                        data: {
                            item: vm.item
                        }
                    }
                });

                console.log('$event', $event);

            }

        }]
    }

}());