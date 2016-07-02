angular.module('QSoft.modules').controller('AuthRegisterCtrl', ['$scope', '$state', 'Upload', 'AuthServices',
        function ($scope, $state, Upload, AuthServices) {
            $scope.$state = $state;
            $scope.qsFormCreate = true;
            $scope.node = {};
            $scope.genders = [
                {id: 0, name: "Name"},
                {id: 1, name: "Nữ"}
            ];

            $scope.birthday = {
                opened: false
            };

            $scope.openCalendar = function () {
                $scope.birthday.opened = true;
            };
            //Process file before upload
            // $scope.processUpload = function (documentRequiredID, file, errFile) {
            //     if(file) {
            //         $scope.node.gallery.push(file);
            //     }
            // };
            if($scope.$state.current.url ==='register') {
                $state.go('auth.register.step_1');
            }
            $scope.actionRegisterStep1 = function (formData) {
                if (formData.$invalid) {
                    return false;
                }
                if ($state.current.name === 'application.add.step_1' && formData.$valid) {
                    $state.go('application.add.step_2');
                }
            };

            $scope.actionRegisterStep2 = function (formData) {
                if (formData.$invalid) {
                    return false;
                }
                if ($state.current.name === 'application.add.step_2' && formData.$valid) {
                    $state.go('application.add.step_3');
                }
            };

            $scope.actionRegisterStep3 = function (formData) {
                if (formData.$invalid) {
                    return false;
                }
                // AuthServices.create($scope.node).then(function (res) {
                //     if(res.success) {
                //         qsPreLoader.status(false);
                //         $state.go('application.payment', {application_id: res.data.id});
                //     }
                // });
            };
        }]);