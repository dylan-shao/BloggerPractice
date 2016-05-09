angular.module('spBlogger.admin.controllers',[])
	.controller('AdminController', ['$scope', function($scope){
		
	}]).controller('PostCreationController', ['$scope','$state','Post','permalinkFilter',
	 function($scope,$state,Post,permalinkFilter){
	 	$scope.post = new Post();
	 	$scope.buttonText= "Create";
	 	$scope.savePost = function(){
	 		$scope.buttonText="Saving...";
	 		$scope.post.permalink=permalinkFilter;
	 		//angular.lowercase($scope.post.title).
	 		//	replace(/[\s]/g,'-');
	 		$scope.post.$save(function(){
	 			$state.go('admin.postViewAll');
	 		})
	 	}
		
	}]).controller('PostUpdateController', ['$scope','Post','$stateParams','$state',
		 function($scope,Post,$stateParams,$state){
		 	$scope.post = Post.get({id:$stateParams.id});
		 	$scope.buttonText="Update";
		 	$scope.updatePost=function(){
		 		$scope.buttonText="Updating";
		 		$scope.post.$update(function(){
		 			$state.go('admin.postViewAll');
		 		});
		 	}
		
	}]).controller('PostListController', ['$scope','Post','popupService','$state',
	 	function($scope,Post,popupService,$state){
	 		$scope.posts=Post.query();
	 		$scope.deletePost=function(post){
	 			if(popupService.showPopup('Really delete this?')){
	 				post.$delete(function(){
	 					$state.go('admin.postViewAll',undefined,{
	 						reload:true
	 					});
	 				});
	 			}
	 		}
		
	}])