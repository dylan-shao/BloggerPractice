describe('Sample Hello App', function(){
	it('should greet the named user',function(){
		browser.get('http://localhost:8080/Prototypes/End2EndTesting/index.html');
		element(by.model('firstName')).sendKeys('John');
		var greeting=element(by.binding('firstName'));
		expect(greeting.getText()).toEqual('Hello John!');
	});
});