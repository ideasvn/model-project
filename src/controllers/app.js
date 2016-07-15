(function () {
    "use strict";
    angular.module('CSMModel', [
        'QSoft.routers',
        'QSoft.constants',
        'QSoft.configs',
        'QSoft.directives',
        'QSoft.filters',
        'QSoft.services',
        'QSoft.modules',
        'QSoft.run'
    ]);
    angular.module('QSoft.routers', ['ui.router']);
    angular.module('QSoft.configs', ['ngMeta', 'ngFlash', 'xtForm']);
    angular.module('QSoft.constants', []);
    angular.module('QSoft.directives', []);
    angular.module('QSoft.filters', []);
    angular.module('QSoft.services', ['ngStorage', 'restangular', 'ngFileUpload']);
    angular.module('QSoft.modules', ['ui.bootstrap', 'ngAnimate', 'ui.bootstrap.datetimepicker', 'ui.dateTimeInput', 'ui.calendar', 'infinite-scroll', 'ngFlash']);
    angular.module('QSoft.run', []);


})();