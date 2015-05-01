(function () {
    angular.module("githubViewerApp")
    .controller('userDetailsController', ['$scope', '$routeParams', 'githubService', userDetailsController]);

    function userDetailsController($scope, $routeParams, githubService) {
        githubService.getUser($routeParams.username).then(function (userInfo) {
            $scope.userInfo = userInfo;
        }, function (errorResponse) {
            $scope.error = errorResponse.data;
        });
    };
}());