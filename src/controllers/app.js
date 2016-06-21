var CSMModel = angular.module('CSMModel', [
    'QSoft.routers',
    'QSoft.constants',
    'QSoft.configs',
    'QSoft.directives',
    'QSoft.filters',
    'QSoft.services',
    'QSoft.modules'
]).run(['$rootScope', '$state', '$localStorage', function ($rootScope, $state, $localStorage) {
        $rootScope.$on('$stateChangeStart', function (event, toState) {
            var isStateLoginLogout = (toState.name === 'login' || toState.name === 'logout');
            var tokenExpiresTime = moment().isAfter($localStorage.tokenExpiresTime);
            var token = $localStorage.token;
            var isToken = (_.isUndefined(tokenExpiresTime) || tokenExpiresTime || _.isUndefined(token));
            if (isToken && !isStateLoginLogout) {
                event.preventDefault();
                $state.go('login', {}, {reload: true});
            }
        });

        $rootScope.$on('$stateChangeSuccess', function (event, toState, fromState) {
            $rootScope.metaHeadingTitle = toState.meta.title;
        });
    }]);
angular.module('QSoft.routers', ['ui.router']);
angular.module('QSoft.configs', ['ngMeta', 'ngFlash', 'xtForm']);
angular.module('QSoft.constants', []);
angular.module('QSoft.directives', []);
angular.module('QSoft.filters', []);
angular.module('QSoft.services', ['restangular', 'ngStorage']);
angular.module('QSoft.modules', ['ui.bootstrap', 'ngAnimate', 'ui.bootstrap.datetimepicker', 'ui.dateTimeInput', 'ngFileUpload', 'angular-nicescroll']);