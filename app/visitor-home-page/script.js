(function (angular) {
    'use strict';
    angular.module('filterExample', [])
        .controller('MainCtrl', function ($scope, $filter, $http) {
            $scope.originalText = 'hello';
            $scope.filteredText = $filter('uppercase')($scope.originalText);
            $http({
                method: 'GET',
                url: 'http://localhost:8081/hello/101'
             }).then(function (response){
                angular.fromJson(response);
                $scope.things = response.data;
             },function (error){
                $scope.things = error;

             });
        });
})(window.angular);