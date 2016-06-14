angular.module('QSoft.services').service('qsModal', ['$uibModal', '$log', '$q', function($uibModal, $log, $q) {
    var obj = {};
    obj.confirm = function(params) {
        defer = $q.defer();
        var qsModal = $uibModal.open({
            animation: true,
            backdrop: 'static',
            templateUrl: '/views/partials/qsmodals/confirm.html',
            controller: ['$scope', '$uibModalInstance', function($scope, $uibModalInstance) {
                $scope.messages = params;
                $scope.actionConfirm = function () {
                    $uibModalInstance.close(true);
                };

                $scope.actionCancel = function () {
                    $uibModalInstance.dismiss(false);
                };
            }],
            size: 'md'
        });
        qsModal.result.then(function(res) {
            defer.resolve(res);
        }, function(err) {
            defer.resolve(err);
        });
        return defer.promise;
    };
    obj.error = function (params) {
        defer = $q.defer();
        var qsModal = $uibModal.open({
            animation: true,
            backdrop: 'static',
            templateUrl: '/views/partials/qsmodals/error.html',
            controller: ['$scope', '$uibModalInstance', function($scope, $uibModalInstance) {
                $scope.messages = params;
                $scope.actionConfirm = function () {
                    $uibModalInstance.close(true);
                };
            }],
            size: 'sm'
        });
        qsModal.result.then(function(res) {

            defer.resolve(res);
        }, function(err) {
            defer.reject(err);
        });
        return defer.promise;
    };
    obj.person = function (params) {
        defer = $q.defer();
        var qsModal = $uibModal.open({
            animation: true,
            backdrop: 'static',
            templateUrl: '/views/partials/qsmodals/person.html',
            controller: ['$scope', '$uibModalInstance', function($scope, $uibModalInstance) {
                $scope.node = params;
                $scope.actionClose = function () {
                    $uibModalInstance.dismiss(true);
                };
            }],
            size: 'sm'
        });
        qsModal.result.then(function(res) {
            defer.resolve(res);
        }, function(err) {
            defer.reject(err);
        });
        return defer.promise;
    };
    obj.enrollment = function (params) {
        defer = $q.defer();
        var qsModal = $uibModal.open({
            animation: true,
            backdrop: 'static',
            templateUrl: '/views/partials/qsmodals/enrollment.html',
            controller: ['$scope', '$uibModalInstance', function($scope, $uibModalInstance) {
                $scope.node = params;
                $scope.actionClose = function () {
                    $uibModalInstance.dismiss(true);
                };
            }],
            size: 'sm'
        });
        qsModal.result.then(function(res) {
            defer.resolve(res);
        }, function(err) {
            defer.reject(err);
        });
        return defer.promise;
    };
    return obj;
}]);