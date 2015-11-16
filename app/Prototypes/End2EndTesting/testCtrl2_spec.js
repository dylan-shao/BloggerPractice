describe("When clicking the load staff button", function(){
	it("should display staff in a list", function(){
		browser.get("http://localhost:8080/Prototypes/End2EndTesting/secondTest.html");

		element(by.id("loadStaff")).click();

		var items=element.all(by.repeater("staff in staffList"));
		expect(items.count()).toEqual(5);
		expect(items.get(0).getText()).toEqual("Miller");
	});
});