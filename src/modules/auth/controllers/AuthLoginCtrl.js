angular.module('QSoft.modules')
    .controller('AuthLoginCtrl', ['$rootScope', '$scope', '$state', 'AuthServices', '$localStorage', 'qsModal',
        function ($rootScope, $scope, $state, AuthServices, $localStorage, qsModal) {
            $scope.actionLogin = function (formData) {
                console.log(formData);
                if (formData.$invalid) {
                    return false;
                }

                var loginData = {
                    username: $scope.username,
                    password: $scope.password,
                    grant_type: 'password',
                    client_id: 1,
                    client_secret: 123
                };

                AuthServices.login(loginData).then(function (res) {
                    $state.go('app.home', {}, {reload: true});
                }, function (err) {
                    qsModal.error('Thông tin tài khoản không chính xác, vui lòng thử lại');
                });
            };
        }]);