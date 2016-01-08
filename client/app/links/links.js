angular.module('shortly.links', [])

.controller('LinksController', ['$scope', 'Links', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function(){
  console.log('corona ', $scope.data)
    Links.getData($scope.data)
    .catch(function (error) {
        console.error('getdata error ', error);
    });
  };
  // $scope.getLinks();
}]);

// .directive('linksTemplate', function(){
//   return {
//     templateUrl: 'links.html'
//   }
// })