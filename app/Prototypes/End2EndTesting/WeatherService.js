'use strict';

angular.module('app').factory('weatherService',['$http','$cacheFactory',function($http){
	
	var _getWeather = function(city,country)
	{
			var query = city + ',' + country;
			return $http(
			 {
				method: "GET",
				url: 'http://api.openweathermap.org/data/2.5/weather',
				params:{q:query}
				
			 }).then(function(response){
				return response.data.weather[0].description;
		});
	}



	return {
		getWeather: function(city, country) {						
				return _getWeather(city,country);
		}
	}
}]);