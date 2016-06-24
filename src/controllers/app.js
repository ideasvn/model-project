(function () {
    "use strict";
    angular.module('CSMModel', [
        'ui.bootstrap',
        'ngAnimate',
        'ngStorage',
        'ui.bootstrap.datetimepicker',
        'ui.dateTimeInput',
        'ngFileUpload',
        // 'angular-nicescroll',
        'QSoft.routers',
        'QSoft.run',
        'QSoft.constants',
        'QSoft.configs',
        'QSoft.directives',
        'QSoft.filters',
        'QSoft.services',
        'QSoft.modules'
    ]);
    angular.module('QSoft.routers', ['ui.router']);
    angular.module('QSoft.configs', ['ngMeta', 'ngFlash', 'xtForm']);
    angular.module('QSoft.constants', []);
    angular.module('QSoft.directives', []);
    angular.module('QSoft.filters', []);
    angular.module('QSoft.services', ['restangular', 'ngStorage']);
    angular.module('QSoft.modules', []);
    angular.module('QSoft.run', []);


})();