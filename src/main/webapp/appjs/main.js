require.config({
    baseUrl: 'appjs/',
    urlArgs: 'v='+ (new Date()).getTime(),
    paths: {
        'domReady': '../plugins/require2.1.15/domReady',
        'boot': './boot',
        'angular': '../plugins/angular/angular.min',
        'angular-route': '../plugins/angular/angular-route/angular-route.min',
        'angular-resource': '../plugins/angular/angular-resource/angular-resource.min',
        'jquery': '../plugins/jquery/jquery.min',
        'bootstrap': '../plugins/bootstrap-3.3.7/js/bootstrap.min',
        'app':'./app'
    },
    /*** shim 用来处理一些没有遵守requirejs规范的js库,可在里面对它们进行一些依赖声明、初始化操作等*/
    shim: {
    	'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-resource': {
            deps: ['angular']
        },
        'jquery': {
            exports: '$'
        },
        'bootstrap': {
            deps: ['jquery']
        }
    },
    deps: ['boot']
});