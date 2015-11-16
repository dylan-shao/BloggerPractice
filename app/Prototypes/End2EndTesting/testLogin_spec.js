describe("testing login",function(){
	it("should succesfully login user", function(){
		var loginPage=new LoginPage();

		loginPage.get();
		loginPage.setUserName("gschenker");
		loginPage.setPassword("secret");

		loginPage.login().then(function(){
			expect(loginPage.status.getText()).toEqual("Status: Logged in");
		});
	});
});

var LoginPage=function(){//LoginPage è una classe a tutti gli effetti
	this.userName=element(by.model("userName"));
	this.password=element(by.model("password"));
	this.status=element(by.binding("status"));

	this.setUserName=function(value){
		this.userName.sendKeys(value);
	}
	this.setPassword=function(value){
		this.password.sendKeys(value);
	}
	this.login=function(){
		return element(by.id("loginButton")).click();
	}
	this.get=function(){
		browser.get("http://localhost:8080/Prototypes/End2EndTesting/login.html");
	}
};

