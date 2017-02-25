define(['./directives'], function(directives){
	directives.directive('manFooter',['$rootScope', '$http', '$location', function($rootScope, $http, $location){
		
		return {
            restrict: 'E',
            templateUrl: 'appjs/home/directives/tpl/footer.html',	
            replace: true,
            transclude: true,
            link: function (scope, element, attrs) {
            	scope.footer = 'copy right @wemin';
            }
        };
	}]);
});