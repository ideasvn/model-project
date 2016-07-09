/**
 * Routes run config
 * 
 * @module Qsoft.routes
 * 
 * */
(function () {
    "use strict";

    angular.module('QSoft.routers')
        .run(['$rootScope', '$state', '$localStorage', function ($rootScope, $state, $localStorage) {

            $rootScope.$on('$stateChangeStart', function (event, toState) {
                var isStateLoginLogout = (toState.name === 'login' || toState.name === 'logout');
                var tokenExpiresTime = moment().isAfter($localStorage.tokenExpiresTime);
                var token = $localStorage.token;
                var isToken = (_.isUndefined(tokenExpiresTime) || tokenExpiresTime || _.isUndefined(token));
                if (isToken && !isStateLoginLogout) {
                    event.preventDefault();
                    //$state.go('login', {}, {reload: true});
                }
            });

            $rootScope.$on('$stateChangeSuccess', function (event, toState, fromState) {
                $rootScope.metaHeadingTitle = toState.meta.title;
            });
        }])
})();