define(['../module'], function(group){
	'use strict';
	group.controller('couponController',['$scope','$routeParams', function(scope,$routeParams){
		scope.id = $routeParams.id;
		scope.hello = 'hello';
		scope.say = function(){
			alert('say hello');
		}
	}]);
});