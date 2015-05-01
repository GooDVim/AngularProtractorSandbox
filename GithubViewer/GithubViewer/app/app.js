(function () {
    var app = angular.module('githubViewerApp', ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
        .when("/search", {
            templateUrl: "app/userSearch/userSearchView.html",
            controller: "userSearchController"
        })
            .when("/users/:username", {
                templateUrl: "app/userDetails/userDetailsView.html",
                controller: "userDetailsController"
            })
        .otherwise({
            redirectTo: "/search"
        })
    });
}());