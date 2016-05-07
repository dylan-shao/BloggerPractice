'use strict'

angular.module('spBlogger.posts',['spBlogger.posts.controllers','spBlogger.posts.services','spBlogger.posts.directives'])
	.config(['$stateProvider','$urlRouterProvider', function(stateProvider,$urlRouterProvider){
		stateProvider.state('allPosts', {
			url:'/posts',
			templateUrl:'modules/posts/views/posts.html',
			controller:'PostController'
		});
		stateProvider.state('singlePost',{
			url:'/posts/:id/:permalink',
			templateUrl:'modules/posts/views/singlePost.html',
			controller:'PostDetailsController'
		});
		$urlRouterProvider.otherwise('/');
	}])

