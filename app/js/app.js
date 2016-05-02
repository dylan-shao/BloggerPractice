'use strict'

angular.module('spBlogger',['ui.router','spBlogger.admin','spBlogger.posts','ngResource'])
	.run(['$state',function($state){
		  
	      $state.go('allPosts');

	}]);