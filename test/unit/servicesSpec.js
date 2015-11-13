'use strict';

/* jasmine specs for services go here */

/*describe('service', function() {
  beforeEach(module('myApp.services'));


  describe('version', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});*/


describe('postService test\n',function(){
	beforeEach(module('spBlogger.posts.services'));
	it('postService should return 4 post objects',inject(function(postService){
		expect(postService.getAll().length).toBe(4);
	}));
	it('postService should return one object for id 2',inject(function(postService){
		var post=postService.getPostById(2);
		expect(post).not.toBe(undefined);
	}));
});
