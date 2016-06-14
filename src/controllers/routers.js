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
                .state('home', {
                    url: '/',
                    parent: 'dashboard',
                    meta: {
                        title: 'Homepage',
                        description: ''
                    },
                    views: {
                        'main@dashboard': {
                            templateUrl: '/views/home/home.html',
                            controller: ['qsPreLoader', function (qsPreLoader) {
                                    qsPreLoader.status(false);
                                }]
                        }
                    }
                })
                .state('dashboard', {
                    abstract: true,
                    views: {
                        'sidebars@dashboard': {
                            templateUrl: '/views/partials/sidebars/sidebars.html',
                            controller: 'SidebarsCtrl'
                        },
                        '@': {
                            templateUrl: '/views/layouts/dashboard.html'
                        }
                    }
                });
        }]);