(function () {

    'use strict';

    module.exports = {
        bindings: {
            "item": "="
        },
        templateUrl: 'components/track-card/track-card.component.html',
        controllerAs: 'vm',
        controller: ['$scope', 'dialogService', function ($scope, dialogService) {

            var vm = this;

            vm.openDialog = function($event) {

                dialogService.show({
                    templateUrl: 'controllers/track-detail/track-detail.controller.html',
                    controllerAs: 'TrackDetailController as vm',
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