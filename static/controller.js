var myApp = angular.module('myApp', []);

myApp.controller('SampleCtrl', ['$scope', 'service', function ($scope, service) {
  $scope.searchText = '';
  $scope.results = '';
  $scope.getRestaurants = function () {
    $scope.results = service.getRestaurantsBasedOnKeywords(
        _translateSearchTextToKeywords($scope.searchText));
  }

  /// Breaks text into keywords by separator ' ';
  function _translateSearchTextToKeywords(searchText) {
    return searchText.split(' ');
  }

  $scope.showImage = true;
  $scope.flipImage = function () {
    $scope.showImage = !$scope.showImage;
  }
}]);
