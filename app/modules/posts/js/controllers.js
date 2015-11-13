angular.module('spBlogger.posts.controllers',[]).controller('PostController',['$scope','Post',function($scope,Post){
	
	/*$scope.getAllPosts=function(){
        return postService.getAll();
	};
    $scope.posts=$scope.getAllPosts();*/

    $scope.posts=Post.query();

    

}]).controller('PostDetailsController',['$stateParams','$state','$scope','Post',function($stateParams,$state,$scope,Post){
    
    /*$scope.getPostById=function(id){
        return postService.getPostById(id);
	};*/

    $scope.singlePost=Post.get({id:$stateParams.id});

    
    $scope.closePost=function(){
        $state.go('allPosts');
	};
    //$scope.singlePost=$scope.getPostById($stateParams.id);


}]);