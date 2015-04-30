(function () {
    angular.module('githubViewerApp')
    .controller('useSearchController', ['$scope', '$location', githubController]);

    function userSearchController($scope, $location) {
        function search() {
            $location.path('/user/' + $scope.login);
        }
    }
})();