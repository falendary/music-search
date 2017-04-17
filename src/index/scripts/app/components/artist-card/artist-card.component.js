(function () {

    'use strict';

    module.exports = {
        bindings: {
            "item": "="
        },
        templateUrl: 'components/artist-card/artist-card.component.html',
        controllerAs: 'vm',
        controller: ['$scope', 'dialogService', function ($scope, dialogService) {

            var vm = this;

            console.log('dialogService', dialogService);

            vm.openDialog = function($event) {

                dialogService.show({
                    templateUrl: 'controllers/card-detail.controller.html',
                    controllerAs: 'CardDetailController as vm',
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