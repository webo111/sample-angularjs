define(['./module'], function(group){
	return group.config([ '$routeProvider', function($routeProvider) {
        $routeProvider
	        .when('/kill', {
	            templateUrl : 'appjs/kill/directives/tpl/kill.html',
	            controller : 'killController'
	        });
    } ]);
});