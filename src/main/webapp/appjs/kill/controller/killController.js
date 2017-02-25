define(['../module'], function(group){
	'use strict';
	group.controller('killController',['$scope', function(scope){
		scope.hello = 'hello';
		scope.say = function(){
			alert('say hello');
		}
	}]);
});