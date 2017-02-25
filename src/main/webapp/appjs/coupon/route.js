define(['./module'], function(group){
	return group.config([ '$routeProvider', function($routeProvider) {
        $routeProvider
	        .when('/coupon', {
	            templateUrl : 'appjs/coupon/tpl/coupons.html',
	            controller : 'couponController'
	        })
	        .when('/coupon/:id', {
	            templateUrl : 'appjs/coupon/tpl/coupons.html',
	            controller : 'couponController'
	        });
    } ]);
});