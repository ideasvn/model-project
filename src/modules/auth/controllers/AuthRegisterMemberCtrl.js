angular.module('QSoft.modules')
    .controller('AuthRegisterMemberCtrl', ['$scope', '$state', 'Upload', 'AuthServices', 'LocationServices',
        '$localStorage', 'qsModal',
        function ($scope, $state, Upload, AuthServices, LocationServices, $localStorage, qsModal) {
            $scope.$state = $state;
            $scope.qsFormCreate = true;
            if ($state.current.redirectTo) {
                $state.go($state.current.redirectTo);
            }
            $scope.node = {};

            $scope.genders = [
                {id: 0, name: "Nam"},
                {id: 1, name: "Nữ"}
            ];

            LocationServices.listAll().then(function (res) {
                $scope.locations = res;
            }, function (err) {
                console.log('Error!!', err);
            });

            //Process file before upload
            $scope.processUpload = function (galleryID, file, errFile) {
                if (file) {
                    $scope.node.gallery[galleryID] = file;
                    console.log($scope.node.gallery[galleryID]);
                }
            };

            $scope.actionStepOne = function (formData) {
                if (formData.$invalid) {
                    return false;
                }
                $scope.node.birthday = moment($scope.node.birthday).format('YYYY-MM-DD');
                $scope.node.type = 0;
                AuthServices.create($scope.node).then(function (res) {
                    if (res.success) {
                        var loginData = {
                            username: $scope.node.email,
                            password: $scope.node.password,
                            grant_type: 'password',
                            client_id: 1,
                            client_secret: 123
                        };
                        AuthServices.login(loginData).then(function (res) {

                            AuthServices.user_info().then(function (res) {
                                $localStorage.userInfo = res.data;
                                if(!_.isUndefined($localStorage.userInfo)) {
                                    $state.go('app.home', {}, {reload: true});
                                }
                            }, function (err) {
                                qsModal.error('Thông tin tài khoản không chính xác, vui lòng thử lại');
                            });
                        }, function (err) {
                            qsModal.error('Thông tin tài khoản không chính xác, vui lòng thử lại');
                        });
                    }
                }, function (err) {
                    if(err.data.code == "23000") {
                        qsModal.error('Tài khoản đã tồn tại. Vui lòng chọn email khác.');
                    }
                });
            };
        }]);