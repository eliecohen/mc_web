'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$location','$http', function($scope,$location,$http) {

    //https://s3.amazonaws.com/mc2/web/pages/1.json

    $http({
        method : "GET",
        url : "https://s3.amazonaws.com/mc2/web/pages/1.json?callback=JSON_CALLBACK"
    }).then(function mySuccess(response) {
        $scope.a = "44444444";
        $scope.response = response;
        console.log(response);
        console.log("########################################");
        $scope.data = response.data;
    }, function myError(response) {
        $scope.a = response;
        console.log(response);
    });


    $scope.id = $location.search().id;
    $scope.title = "This is a tile";
    $scope.text = "text.....";
    $scope.chapter = "Chapter ABC";
}]);