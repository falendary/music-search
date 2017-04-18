(function () {

    'use strict';

    module.exports = function ($rootScope, $controller, $compile, $templateCache) {

        var dialogTemplate;
        var dialogElement;
        var templateScope;
        var templateCtrl;

        var _this = this;


        this.show = function (params) {

            if (dialogElement) {
                dialogElement.html('');
            }


            dialogTemplate = $templateCache.get(params.templateUrl);

            dialogTemplate = '<div class="dialog-wrapper">' + dialogTemplate + '</div>';

            console.log('params', params);
            console.log('_this', _this);

            templateScope = $rootScope.$new(true);
            templateCtrl = $controller(params.controllerAs, {
                $scope: templateScope,
                dialogService: _this,
                data: params.locals.data
            });

            console.log('templateCtrl', templateCtrl);

            dialogElement = angular.element(dialogTemplate);

            dialogElement.children().data('$ngControllerController', templateCtrl);

            var compiled = $compile(dialogElement)(templateScope);

            $('body').append(compiled);
            $('body').css('overflow', 'hidden');

        };

        this.hide = function () {
            $('.dialog-wrapper').remove();
            $('body').css('overflow', 'auto');
            dialogElement.html('');

            return new Promise(function (resolve, reject) {
                resolve(options);
            })
        };

        this.cancel = function () {
            $('.dialog-wrapper').remove();
            $('body').css('overflow', 'auto');
            dialogElement.html('');
        };

        return {
            show: this.show,
            hide: this.hide,
            cancel: this.cancel
        }


    }

}());