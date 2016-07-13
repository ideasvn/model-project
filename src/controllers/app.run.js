/**
 * App run config
 *
 * @module Qsoft.run
 *
 * */
(function () {
    "use strict";

    angular.module('QSoft.run')
        .run(['$rootScope', '$state', '$localStorage', 'API_URL', 'Restangular', function ($rootScope, $state, $localStorage, API_URL, Restangular) {
            /* Config baseUrl for Restangular service */
            // Restangular.setBaseUrl(API_URL);
        }]);
})();