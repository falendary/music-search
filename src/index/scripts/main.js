'use strict';

var app = angular.module('index', []);

app.controller('AppController', ['$scope', require('./app/controllers/app/app.controller.js')]);
app.controller('ArtistDetailController', ['$scope', 'dialogService', 'data', require('./app/controllers/artist-detail/artist-detail.controller.js')]);
app.controller('AlbumDetailController', ['$scope', 'dialogService', 'data', require('./app/controllers/album-detail/album-detail.controller.js')]);
app.controller('TrackDetailController', ['$scope', 'dialogService', 'data', require('./app/controllers/track-detail/track-detail.controller.js')]);

app.service('dialogService', ['$rootScope', '$controller', '$compile', '$templateCache', require('./app/services/dialog.service')]);

app.component('artistCard', require('./app/components/artist-card/artist-card.component'));
app.component('albumCard', require('./app/components/album-card/album-card.component'));
app.component('trackCard', require('./app/components/track-card/track-card.component'));

app.run(function(){

    var cookiesService = require('./app/services/cookie.service');

    cookiesService.setCookie('token', 'BQAdCvzToN5O0jPs3T-HPvQkt976Ngfacp9GX_8KoXbmS0R9mb3wPUhXD_ZXwHqOFjUZZOfbfnZQ5srlAQaUKA');

});

require('./templates.min.js');
