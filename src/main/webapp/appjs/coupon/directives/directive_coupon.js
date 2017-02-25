define(['./directives'], function(directives){
	directives.directive('manCoupon',['$rootScope', '$http', '$location',
		function($rootScope, $http, $location){
			
			return {
	            restrict: 'E',
	            templateUrl: 'appjs/coupon/directives/tpl/coupon.html',
	            replace: true,
	            transclude: true,
	            link: function (scope, element, attrs) {
	            	//scope.id = $routeParams.id;
	            	/*scope.title = 'directive coupon title'
	            	scope.coupon = {title:'coupon01',content:'content01'};
	            	scope.say = function(){
	            		alert('ok...');
	            	}*/
	            }
			}
	}]);
});