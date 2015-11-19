describe("When clicking the load staff button (take2)", function(){
	it("should display staff in a list", function(){
		browser.get("http://localhost:8080/Prototypes/End2EndTesting/secondTest.html");

		element(by.id("loadStaff")).click();

		var items=element.all(by.repeater("staff in staffList"));
		items.then(function(arr){ //l'oggetto della promessa è in arr
			expect(arr.length).toEqual(5);
			expect(arr[0].getText()).toEqual("Miller");
		});
	});
});