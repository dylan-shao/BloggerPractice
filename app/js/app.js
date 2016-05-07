'use strict'

angular.module('spBlogger', ['ui.router', 'spBlogger.admin', 'spBlogger.posts', 'ngResource'])
    .config(['$locationProvider', '$urlRouterProvider', function($locationProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(false);


    }])

.run(['$state', function($state) {

    $state.go('allPosts');

}]);
