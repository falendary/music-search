'use strict';

describe('app module', function () {

    console.log('angular.mock', angular.mock);

    beforeEach(angular.mock.module('index'));

    describe('album card component', function () {

        var element;
        var scope;

        beforeEach(inject(function ($rootScope, $compile) {

            scope = $rootScope.$new();

            element = $compile('<album-card item="item"></album-card>')(scope);

            scope.item = {
                name: 'Album name'
            };

            scope.$apply();

        }));


        it('should return album name', function () {

            var name = element[0].querySelector('.card-footer').textContent;

            expect(name).toEqual('Album name');

        });
    });
});