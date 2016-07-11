'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
    $scope.dateChosen = false
    $scope.book = {}
$http({url : '/dates', method : 'GET'}).then(function(response){
        //populate the select element
    console.dir(response.data)
        $scope.dates = response.data
    })
$scope.sbmt = function(){

    $location.path('/view2').search($scope.book);
  }
$scope.select = function(){
    if ($scope.book.date == undefined) {console.log('NULL'); return}
    else $scope.dateChosen = true
console.log($scope.book.date)
}
}])//controller
.directive('listprobs', [ '$http', function($http){
      return {
        require : 'ngModel',
        link : function(scope,element,attrs, ngModel){
          var probs = new Array
          $http( {
            url: '/probs',
            method: "GET"}
          )
              .then( function(msg){

                probs = msg.data
                element.autocomplete({
                  source: probs
                })
                element.on( "autocompletechange", function(event, ui){
                  var val = event.target.value
                  if (probs.indexOf(val) == -1  )
                  {
                    alert(val + ' not in list of Problems')
                    angular.element(event.target).val("")
                    return
                  }//if
                  scope.$apply(function(){
                    ngModel.$setViewValue(val)
                  })
                })//autocompletechange callback
              })//success
        }//link
      }//return
    }])//directive