angular.module('example').controller('ExampleController', ['$scope', 'Authentication',
  function($scope, Authentication) {
    if (Authentication.user) {
      $scope.name = Authentication.user.fullName;
    } else {
      $scope.name = 'MEAN application';
    }
  } 
]);
