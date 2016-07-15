angular.module('QSoft.modules').controller('AuthLogoutCtrl',
    ['$rootScope', '$scope', '$log', 'AuthServices', 'Flash', '$state',
        function ($rootScope, $scope, $log, AuthServices, Flash, $state) {
            $scope.title = 'Login into Control Panel';
            $scope.dataLoading = false;
            AuthServices.clearCredentials().then(function (res) {
                $state.go('app.home');
            });
        }]);