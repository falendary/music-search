'use strict';

describe('app module', function () {

    console.log('angular.mock', angular.mock);

    beforeEach(angular.mock.module('index'));

    describe('track card component', function () {

        var element;
        var scope;

        beforeEach(inject(function ($rootScope, $compile) {

            scope = $rootScope.$new();

            element = $compile('<artist-card item="item"></artist-card>')(scope);

            scope.item = {
                name: 'Track name'
            };

            scope.$apply();

        }));


        it('should return track name', function () {

            var name = element[0].querySelector('.card-footer').textContent;

            expect(name).toEqual('Track name');

        });
    });
});