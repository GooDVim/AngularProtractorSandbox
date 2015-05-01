(function () {
    angular.module('githubViewerApp')
    .controller('userSearchController', ['$scope', '$location', userSearchController]);

    function userSearchController($scope, $location) {
        $scope.search = function() {
            $location.path('/users/' + $scope.login);
        }
    }
})();