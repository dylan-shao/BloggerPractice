'use strict'

angular.module('spBlogger.posts.directives', [])
    .directive('spbComments',  function(Post) {
        return {
            restrict: 'AEC',

            scope: {
                postInstance: '='
            },
            replace: true,

            link: function(scope, elem, attrs) {

                scope.saveComment = function() {

                    var postID = scope.postInstance._id, //la post istance proviene dal parent
                        savedPostInstance = new Post();
                        console.log(savedPostInstance);
                    

                    scope.comment.datePublished = new Date();


                    angular.copy(scope.postInstance, savedPostInstance);
                    console.log(savedPostInstance);
                    console.log(scope.postInstance);
                    

                    savedPostInstance.comments.unshift(scope.comment);

                    scope.postInstance.comments.unshift(scope.comment);

                    scope.comment = {};

                    savedPostInstance.$update();
                   //scope.postInstance.$update();
                }
            },
            templateUrl: 'modules/posts/views/comments.html'
        }
    });
