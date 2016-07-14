angular.module('QSoft.modules')
    .controller('AuthRegisterCtrl', ['$scope', '$state', 'Upload', 'AuthServices', 'LocationServices',
        '$localStorage',
        function ($scope, $state, Upload, AuthServices, LocationServices, $localStorage) {
            $scope.$state = $state;
            $scope.qsFormCreate = true;
            if(_.isUndefined($localStorage.userRegisterData)) {
                $scope.node = {};
            } else {
                $scope.node = $localStorage.userRegisterData;
            }

            $scope.maxImages = 10;

            $scope.genders = [
                {id: 0, name: "Name"},
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
                $scope.node.type = 0;
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
                AuthServices.create($scope.node).then(function (res) {
                    console.log(res);
                    if(res.success) {
                        $state.go('app.home');
                    }
                });
            };
        }]);