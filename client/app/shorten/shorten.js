angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};


  $scope.addLink = function(link) {
    Links.addLink(link).then(function(passedOverLink){
      $scope.links.links = passedOverLink
      console.log('karuuun ', $scope.link.links)
    }).catch(function(err){
      console.error(err)
    })

  }
});
