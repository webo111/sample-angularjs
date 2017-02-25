define(['require', 'angular', 'app'], function(require, ng, app) {
    'use strict';
    require([ 'domReady!' ], function(document) {
        ng.bootstrap(document, [ 'man' ]);
    });
});