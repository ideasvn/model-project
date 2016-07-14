angular.module('QSoft.services').service('AuthServices', ['Restangular', '$q', function (Restangular, $q) {
    var obj = {};
    var params = {};
    var baseRest = Restangular.service('register');

    obj.create = function (params) {
        var defer = $q.defer();
        var fd = new FormData();
        _.map(params, function (value, key) {
            if (key !== 'gallery') {
                fd.append(key, value)
            } else {
                _.map(value, function (v, k) {
                    fd.append('gallery[' + k + ']', v);
                });
            }
        });
        Restangular.one('register')
            .withHttpConfig({transformRequest: angular.identity})
            .customPOST(fd, undefined, undefined, {'Content-Type': undefined})
            .then(function (res) {
                defer.resolve(res);
            }, function (err) {
                defer.reject(err);
            });
        return defer.promise;
    };

    return obj;
}]);