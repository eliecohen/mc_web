'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$location','$http', function($scope,$location,$http) {


    $scope.currentMedia = 0;
    $scope.id = $location.search().id;
    var url = "https://s3.us-east-2.amazonaws.com/mc2-web/pages/"+$scope.id+".json"

    $http({
        method : "GET",
        url : url,
    }).then(function mySuccess(response) {

        $scope.title = response.data.title;
        $scope.text = response.data.text;
        $scope.chapter = response.data.chapter;
        $scope.volume = response.data.volume;
        $scope.media = response.data.media;
    }, function myError(response) {
        $scope.error = response;
    });

    $scope.switchMedia = function (index){
        $scope.currentMedia = index;
    };


}]);