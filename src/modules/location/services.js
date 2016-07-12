angular.module('QSoft.services').service('LocationServices', ['Restangular', '$q', function (Restangular, $q) {
    var obj = {};
    var params = {};
    var baseRest = Restangular.service('locations');

    obj.listAll = function (params) {
        var defer = $q.defer();
        baseRest.getList().then(function (res) {
            defer.resolve(res.data);
        }, function (err) {
            defer.reject(err);
        });
        return defer.promise;
    };

    return obj;
}]);