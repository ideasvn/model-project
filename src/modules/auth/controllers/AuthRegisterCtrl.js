angular.module('QSoft.modules')
    .controller('AuthRegisterCtrl', ['$scope', '$state', 'Upload', 'AuthServices', 'LocationServices',
        '$localStorage',
        function ($scope, $state, Upload, AuthServices, LocationServices, $localStorage) {
            $scope.$state = $state;
            $scope.qsFormCreate = true;
            if($state.current.redirectTo) {
                $state.go($state.current.redirectTo);
            }
            if(_.isUndefined($localStorage.userInfo)) {
                $state.go('app.home', {}, {reload: true});
            } else {
                $scope.uID = $localStorage.userInfo.id;
            }
            $scope.node = {};
            if(_.isUndefined($localStorage.userRegisterData)) {
                AuthServices.user_detail($scope.uID).then(function (res) {
                    $scope.node = res;
                });
            } else {
                $scope.node = $localStorage.userRegisterData;
            }
            $scope.maxImages = 10;

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
                if(file) {
                    $scope.node.gallery[galleryID] = file;
                    console.log($scope.node.gallery[galleryID]);
                }
            };

            $scope.actionStepOne = function (formData) {
                if (formData.$invalid) {
                    return false;
                }

                $localStorage.userRegisterData = $scope.node;
                if ($state.current.name === 'auth.register.step_1') {
                    $state.go('auth.register.step_2');
                }
            };

            $scope.actionStepTwo = function (formData) {
                if (formData.$invalid) {
                    return false;
                }
                $scope.node.birthday = moment($scope.node.birthday).format('YYYY-MM-DD');
                $localStorage.userRegisterData = $scope.node;
                if ($state.current.name === 'auth.register.step_2' && formData.$valid) {
                    $state.go('auth.register.step_3');
                }
            };

            $scope.actionStepThree = function (formData) {
                if (formData.$invalid) {
                    return false;
                }
                $localStorage.userRegisterData = undefined;
                $scope.node.type = 1;
                AuthServices.update($scope.uID, $scope.node).then(function (res) {
                    console.log(res);
                    if(res.success) {
                        $state.go('app.home');
                    }
                });
            };
        }]);