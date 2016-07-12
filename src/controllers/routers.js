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
                                templateUrl: 'views/layouts/header.html'
                            },
                            'footer': {
                                templateUrl: 'views/layouts/footer.html'
                            }
                        }
                    })
                    .state('app.detailModel', {
                        url: '/detail/:id',
                        meta: {
                            title: 'Chi Tiết Người Mẫu',
                            description: ''
                        },
                        views: {
                            'main@': {
                                templateUrl: 'views/detail/index.html',
                                controller: 'DetailModelCtr',
                                controllerAs: 'DetailModelCtrAs',
                                resolve: {
                                    listBooking: ['$q', 'Restangular', '$stateParams', function ($q, Restangular, $stateParams) {

                                            var deferred = $q.defer();
                                            var defaultParams = {rwrel: 1, rwobj: 1};
                                            Restangular.all('booking-list').post({idModel: $stateParams.id}).then(function (res) {
                                                deferred.resolve(res.data);
                                            });
                                            return deferred.promise;
                                        }],
                                },
                            }
                        }

                    });
            }]);

})();