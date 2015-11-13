'use strict'

var routerApp=angular.module('spBlogger',['ui.router','ngResource','spBlogger.admin','spBlogger.posts']);

routerApp.config(['$locationProvider','$urlRouterProvider',function($locationProvider,$urlRouterProvider){
	 $locationProvider.html5Mode(false);


}]);

routerApp.run(['$state',function($state){
	  
      $state.go('allPosts');

}]);