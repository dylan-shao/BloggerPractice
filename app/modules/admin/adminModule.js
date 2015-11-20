'use strict'
 
 
angular.module('spBlogger.admin',['spBlogger.admin.controllers','spBlogger.admin.services','spBlogger.admin.filters','spBlogger.admin.directives']);

angular.module('spBlogger.admin').config(['$stateProvider',function($stateProvider){
	$stateProvider.state('admin',{
		url:'/admin',
		abstract:true, //vuol dire che gli altri controller sotto di lui sono suoi figli
		controller:'AdminController',
		templateUrl:'modules/admin/views/admin-home.html'
	});

	$stateProvider.state('admin.postNew',{
		url:'/posts/new',
		controller: 'PostCreationController',
		templateUrl:'modules/admin/views/admin-new-post.html'
	});

	$stateProvider.state('admin.postUpdate',{
		url:'/posts/:id/edit',
		controller: 'PostUpdateController',
		templateUrl:'modules/admin/views/admin-update-post.html'
	});

	$stateProvider.state('admin.postViewAll',{
		url:'',
		controller: 'PostListController',
		templateUrl:'modules/admin/views/admin-all-posts.html'
	});

	$stateProvider.state('login',{
    	url:'/login',
    	controller:'LoginController',
    	templateUrl:'modules/admin/views/login.html'
	});
	
}]);
