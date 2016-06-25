(function () {
    "use strict";
    angular.module('QSoft.routers')
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $urlRouterProvider.otherwise("/404");
            $locationProvider.html5Mode(true);
            $stateProvider
                .state('app.male', {
                    url: '/nguoi-mau-nam',
                    meta: {
                        title: 'Người mẫu nam',
                        description: ''
                    },
                    views: {
                        'main@': {
                            templateUrl: 'views/list/male.html',
                            controller: 'MaleModelController',
                            controllerAs: 'maleCtr'
                        }
                    }
                })
                .state('app.female', {
                    url: '/nguoi-mau-nu',
                    meta: {
                        title: 'Người mẫu nữ',
                        description: ''
                    },
                    views: {
                        'main@': {
                            templateUrl: 'views/list/female.html',
                            controller: 'FemaleModelController',
                            controllerAs: 'femaleCtr'
                        }
                    }
                });
        }]);

})();