define(['./directives'], function(directives){
	directives.directive('manCoupons',['$rootScope', '$http', '$location','$routeParams',
	    function($rootScope, $http, $location,$routeParams){
			
			return {
	            restrict: 'E',
	            templateUrl: 'appjs/coupon/directives/tpl/coupon.html',
	            replace: true,
	            transclude: true,
	            link: function (scope, element, attrs) {
	            	//
	            	/*scope.title = 'directive coupon title'
	            	scope.coupon = {title:'coupon01',content:'content01'};
	            	*/
	            	scope.id = $routeParams.id;
	            	scope.say = function(){
	            		alert('ok...');
	            	}
	            }
			}
	}]);
});