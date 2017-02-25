define(['./directives'], function(directives){
	directives.directive('manCoupon',['$rootScope', '$http', '$location',
		function($rootScope, $http, $location){
			
			return {
	            restrict: 'E',
	            templateUrl: 'appjs/coupon/directives/tpl/coupon.html',
	            replace: false,
	            transclude: true,
	            link: function (scope, element, attrs) {
	            	scope.title = 'directive coupon title'
	            	scope.coupon = {title:'coupon01',content:'content01'};
	            }
			}
	}]);
});