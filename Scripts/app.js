var app = angular.module("myApp", ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
        redirectTo: '/home'
    })
    .when('/home', {
        templateUrl: 'views/home.html'
    })
    .when('/gallery', {
        templateUrl: 'views/gallery.html',
        controller: 'GalleryController'        
    })
    .otherwise({
      redirectTo: '/'
    });
});

