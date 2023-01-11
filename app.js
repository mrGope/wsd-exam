
var app = angular.module('myApp', ['ngRoute']);
app.controller('FirstController', function($scope) {
    $scope.message = 'Hello from Main Controller';
    });
app.config(function($routeProvider) {
    $routeProvider
     
    .when('/', {
    templateUrl : 'post.html',
    controller : 'FirstController'
    })
     
    .when('/profile', {
    templateUrl : 'profile.html',
    controller : 'SecondController'
    })
     
    .when('/doubt', {
    templateUrl : 'doubt.html',
    controller : 'ThirdController'
    })

   .when('/doubt', {
        templateUrl: 'doubt.html',
         controller: 'ThirdController'
        })

            .when('/message', {
                    templateUrl: 'message.html',
                    controller: 'ThirdController'
            })
     
 .otherwise({redirectTo: '/'});
    
    });

app.controller('FirstController', function($scope) {
        $scope.message = 'Hello from FirstController';
        });
         
app.controller('SecondController', function($scope) {
        $scope.message = 'Hello from SecondController';
        });
         
app.controller('ThirdController', function($scope) {
        $scope.message = 'Hello from ThirdController';
        });