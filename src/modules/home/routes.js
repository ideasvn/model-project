(function () {
    "use strict";
    angular.module('QSoft.routers')
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
                $urlRouterProvider.otherwise("/404");
                $locationProvider.html5Mode(true);
                $stateProvider
                    .state('app.home', {
                        url: '/',
                        meta: {
                            title: 'VietNam next top model',
                            description: ''
                        },
                        views: {
                            'main@': {
                                templateUrl: 'views/home/index.html',
                                controller: 'HomeController',
                                controllerAs: 'homeCtr'
                            }
                        }
                    });
            }]);

})();