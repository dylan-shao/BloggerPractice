angular.module('app').directive('helloWorld', function() {
	return {
		
		restrict: 'AEC',
		scope:{
			message: '@',
			showMessage:'&showMessageAttr' 
		},
		replace: true,
		template: '<p ng-click="clearMessage()">Hello, World!{{message}} </p>',
		link: function(scope, elem, attrs) {
			//con la definizione di scope sopra, ho creato uno scope isolato..per beccare le robe dal parent devo quindi usare le tecniche che sono sopra
			console.log(scope.$parent.fromParent);
			scope.$watch('message', function(value) {
				scope.showMessage({arg:' sample argument'}); // This will call the function defined by enclosing controller
			});
			scope.clearMessage = function() {
				scope.message = '';
			}			
			elem.bind('mouseover', function() {			
				elem.css('cursor', 'pointer');
			});
		}

	}

});
			