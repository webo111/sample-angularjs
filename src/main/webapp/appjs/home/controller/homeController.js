define(['../module'], function(group){
	'use strict';
	group.controller('homeController', ['$scope','$routeParams', function(scope,$routeParams){
		alert('h ok.');
		$('#navbar li').click(function(){
			alert('ok.');
			$("#navbar li").removeClass("active");
		});
	}]);
});