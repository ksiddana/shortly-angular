angular.module('shortly.links', [])

.controller('LinksController', ['$scope', 'Links', function ($scope, Links) {
  // // Your code here
  // $scope.data = {
  //   links: []
  // };
  $scope.data = [];

  $scope.applesauce = '';
  
  $scope.increaseCount = function(x){
    console.log(x.visits)

    Links.navToLink();
    // x++;
  };

  $scope.getLinks = function(){
  console.log('corona ', $scope.data)
    Links.getData().then(function(passOverData){
      $scope.data = passOverData
      console.log('dataaaaa', passOverData)
    }).catch(function(err){
      console.error(err)
    })
  };
  $scope.getLinks();


}]);
