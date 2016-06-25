/***
 * Female Model controller
 *
 * @module QSoft.modules
 * @controller FemaleModelController
 *
 * */
(function () {
    "use strict";

    angular.module('QSoft.modules')
        .controller('FemaleModelController', ['$scope', 'Restangular', function ($scope, Restangular) {

            var self = this,
                uriListModel = 'models';
            self.perPage = 12;
            self.page = 1;
            self.models = [];
            

            /* Get list models */
            Restangular.all(uriListModel).getList({per_page: self.perPage, page: self.page})
                .then(function (res) {
                    self.models = res.data;
                })
                .then(function (error) {

                });
        }]);
})();