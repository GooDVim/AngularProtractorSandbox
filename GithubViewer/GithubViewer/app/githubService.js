(function () {
    angular.module('githubViewerApp')
    .factory('githubService', ['$http', githubService]);

    function githubService($http) {
        return {
            getUser: getUser,
            getRepo: getRepo
        };

        function getUser(username) {
            return $http.get('https://api.github.com/users/' + username).then(onUserSuccess);
        };

        function onUserSuccess(response) {
            return response.data;
        };

        function getRepo() {

        };
    };
})();