angular.module('QSoft.services')
    .service('AuthServices', ['Restangular', '$q', '$localStorage',
        function (Restangular, $q, $localStorage) {
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

            obj.login = function (params) {
                var defer = $q.defer();
                Restangular.service('login').post(params).then(function (res) {
                    obj.setCredentials(res);
                    defer.resolve(res);
                }, function (err) {
                    defer.reject(err);
                });
                return defer.promise;
            };

            obj.setCredentials = function (params) {
                var token = params.token_type + ' ' + params.access_token;
                $localStorage.token = token;
                $localStorage.tokenExpiresTime = moment().add(params.expires_in, 's');
                Restangular.setDefaultHeaders({
                    Authorization: token || ''
                });
            };

            obj.clearCredentials = function () {
                var defer = $q.defer();
                $localStorage.$reset();
                defer.resolve(true);
                return defer.promise;
            };

            return obj;
        }]);