define(['./directives'], function(directives){
	directives.directive('manHeader', ['$rootScope', '$http', '$location',function($rootScope, $http, $location){
		
		return {
            restrict: 'E',
            templateUrl: 'appjs/home/directives/tpl/header.html',
            replace: true,
            transclude: true,
            link: function (scope, element, attrs) {
                scope.text = 'header';
            }
		};
	}]);
});