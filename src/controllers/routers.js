(function () {
    "use strict";
    angular.module('QSoft.routers')
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $urlRouterProvider.otherwise("/404");
            $locationProvider.html5Mode(true);
            $stateProvider
                .state('404', {
                    url: '/404',
                    meta: {
                        title: 'Oops! Page Not Found',
                        description: ''
                    },
                    templateUrl: '/views/404/404.html'
                })
                .state('app', {
                    abstract: true,
                    views: {
                        'header': {
                            templateUrl: 'views/common/header.html'
                        },
                        'footer': {
                            templateUrl: 'views/common/footer.html'
                        }
                    }
                })
                .state('app.home', {
                    url: '/',
//                            parent: 'app',
                    meta: {
                        title: 'Homepage',
                        description: ''
                    },
                    views: {
                        'main@': {
                            templateUrl: 'views/home/index.html',
                            // controller: ['qsPreLoader', function (qsPreLoader) {
                            //     qsPreLoader.status(false);
                            // }]
                        }
                    }
                });
        }]);

})();