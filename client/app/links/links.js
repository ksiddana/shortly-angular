angular.module('shortly.links', [])

.controller('LinksController', ['$scope', 'Links', function ($scope, Links) {
  // Your code here
  console.log('here is the links ', Links)
  
  $scope.data = {
    links: []
  };
  
  $scope.getLinks = function(){
  console.log('corona ', $scope.data)
    Links.getData().then(function(passOverData){
      $scope.data.links = passOverData
    })
  };
  
  $scope.getLinks();

}]);
