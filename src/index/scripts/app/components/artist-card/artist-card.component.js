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

            vm.openDialog = function($event) {

                dialogService.show({
                    templateUrl: 'controllers/artist-detail/artist-detail.controller.html',
                    controllerAs: 'ArtistDetailController as vm',
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