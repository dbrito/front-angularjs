angular.module('EstudoAngular').config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
        templateUrl: './templates/template1.html',
        controller: function ($http, $scope, $location) {
            $http.get('http://localhost:8080/autors/').then(function (response) {
                $scope.baseUrl = $location.absUrl();
                $scope.autors = response.data;
            })
        }
    })
    .when('/autors/:id', {
        templateUrl: './templates/template2.html',
        controller: function ($http, $scope, $location, $routeParams) {
            $http.get('http://localhost:8080/autors/' + $routeParams.id).then(function (response) {
                $scope.baseUrl = $location.absUrl();
                $scope.autor = response.data;
            })
        }
    })
    .otherwise({
        templateUrl: './templates/default.html'
    })
});
