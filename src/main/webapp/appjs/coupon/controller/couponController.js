define(['../module'], function(group){
	'use strict';
	group.controller('couponController',['$scope', function(scope){
		$('#navbar li').click(function(){
			$('#navbar li').removeClass('active');
			$(this).addClass('active');
		});
	}]);
});