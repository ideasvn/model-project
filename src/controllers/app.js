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
    angular.module('QSoft.modules', ['ui.bootstrap', 'ngAnimate', 'ui.bootstrap.datetimepicker', 'ui.dateTimeInput', 'ui.calendar', 'infinite-scroll']);
    angular.module('QSoft.run', []).run(['$rootScope', '$state', '$localStorage', function ($rootScope, $state, $localStorage) {
        $rootScope.$on('$stateChangeStart', function (event, toState) {
            var isStateLoginLogout = (toState.name === 'auth.login' || toState.name === 'auth.logout');
            var tokenExpiresTime = moment().isAfter($localStorage.tokenExpiresTime);
            var token = $localStorage.token;
            var isToken = (_.isUndefined(tokenExpiresTime) || tokenExpiresTime);
            if (_.isUndefined(token)) {
                $rootScope.isQuest = true;
                $rootScope.isMember = false;
                if (isToken && !isStateLoginLogout) {
                    event.preventDefault();
                    $state.go('auth.login', {}, {reload: true});
                }
            } else {
                $rootScope.isMember = true;
                $rootScope.isQuest = false;
            }
        });
    }]);
})();