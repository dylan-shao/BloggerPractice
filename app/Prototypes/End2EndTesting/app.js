var app=angular.module("app",[]);

app.config(function($httpProvider){
	//$httpProvider.defaults.headers.common.Accept="application/json";
	$httpProvider.defaults.headers.get={'Content-Type':'application/json'};
	 $httpProvider.defaults.cache = true;

	/*$httpProvider.defaults.transformRequest=function(data,getHeaders){
		var headers=getHeaders(); //obtain the headers
		headers['Content-Type']='text/plain'; // add a header dynamically
		
		var jsonData=JSON.stringify(headers);
		debugger;

		return jsonData; //return serialized data
	}*/
});

app.controller("TestCtrl", ['$scope','$q','$interval','$timeout',function($scope, $q, $interval,$timeout) {
	$scope.firstName="";
	$scope.status2="IN ATTESA";

	//we will use $q here
	$scope.getPromise = function() {
		
		var i = 0;
		var deferred = $q.defer(); //creates a new deferred object
		var timer = $interval(
			function() {
				if ($scope.cancelRequested) { //if cancellation is requested from UI, reject the Promise
					$scope.cancelRequested=false;
					deferred.reject('Promise Rejected due to cancellation.');
					$interval.cancel(timer);
				}

				i = i + 1; //increment i each time
				if (i == 5) {
					deferred.resolve('Counter has reached 5'); //once the value of i=5, resolve the promise
					$interval.cancel(timer); //make sure to cancel timer
				}

				else {
					deferred.notify('Counter has reached ' + i); //else notify the client about the progress
				}

		}, 1000); //run the task every 1 second

		return deferred.promise; //finally, return the Promise instance
	};

	$scope.getPromise1 = function() {
		var deferred = $q.defer(); //creates a new deferred object

		deferred.resolve("PARTITO!");

		return deferred.promise; //finally, return the Promise instance
	};

	$scope.getAsyncMessage = function() {
		//get hold of the Promise instance
		var firstPromise=$scope.getPromise1();		

		firstPromise.then(function(message) {
			$scope.status2=message;
			var promise = $scope.getPromise(); //we have our message here

			promise.then(function(message) {
						$scope.status = 'Resolved : ' + message;
						$timeout(function(){$scope.status = '';},1000);
						 //SUCCESS CALLBACK
					}, function(message) {
						$scope.status ='Rejected : ' + message; 
						$timeout(function(){$scope.status = '';},1000);
						
						//FAILURE CALLBACK
					}, function(message) {
						$scope.status = 'Notifying : ' + message; //NOTIFY CALLBACK
					}
			);

			return promise;

			 //return a promise here again
		}).then(function(message) {
			//handle the final result
			$scope.status2="FATTO!";
		},function(message) {
			//handle the final result
			$scope.status2="BLOCCATO - PRONTO PER UN NUOVO TENTATIVO";
		},function(message) {
			//handle the final result
			$scope.status2="IN CORSO!";
		});
	};

}]);

/*In this case the success callback to first then() returns another promise instance.
So, the second then() waits on this promise until it's settled (resolved or rejected)
and the appropriate callback is called with a resolution or rejection message as an
argument. The figure shown in Figure 8.2 depicts what's happening here:*/

app.controller("Test2Ctrl", function($scope){
	$scope.loadStaff=function(){
		$scope.staffList=[
			{firstName:"Ann", lastName:"Miller"},
			{firstName:"Bert", lastName:"Buster"},
			{firstName:"Kurt", lastName:"Denham"},
			{firstName:"Sue",lastName:"Kazakov"},
			{firstName:"Bell",lastName:"Labs"}
		];		
	};
});


app.controller('WeatherController',['$scope','weatherService',function($scope, weatherService) {
	$scope.getWeather = function() {
		$scope.weatherDescription = "Fetching . . .";
		weatherService.getWeather($scope.city, $scope.country).then(function(data) {
			$scope.weatherDescription = data;
		}, function() {
			$scope.weatherDescription = "Could not obtain data";
		});
	}
}]);

app.controller("DirectivesController", function($scope){
	$scope.message="I love AngularJS";
});

