angular.module('QSoft.services')
    .service('AuthServices', ['Restangular', '$q', '$localStorage',
        function (Restangular, $q, $localStorage) {
            var obj = {};
            var params = {};
            var baseRest = Restangular.service('register');
            var baseRest3 = Restangular.service('update');
            var baseRest2 = Restangular.service('users');
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

            obj.user_info = function () {
                var defer = $q.defer();
                Restangular.service('user-info').post().then(function (res) {
                    defer.resolve(res);
                }, function (err) {
                    defer.reject(err);
                });
                return defer.promise;
            };

            obj.user_detail = function (params) {
                var defer = $q.defer();
                baseRest2.one(params).get().then(function (res) {
                    defer.resolve(res.data);
                }, function (err) {
                    defer.reject(err);
                });
                return defer.promise;
            };

            obj.update = function (uid, params) {
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
                baseRest3.one(uid)
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