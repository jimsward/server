'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$routeParams', function($scope, $routeParams) {
  console.dir($routeParams)
  $scope.confirm = $routeParams
  console.dir($scope.confirm)
  $scope.ok = function(){
    alert('Thank you. You will receive an email with your confirmation shortly')
  }

}]);