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
                uri = 'models';
            self.perPage = 12;
            self.gender = 1;

            self.collection = {
                busy: false,
                ended: false,
                after: 1,
                per_page: self.perPage,
                items: []
            };

            self.collection.nextPage = function () {
                if (self.collection.busy || self.collection.ended) {
                    return;
                }

                self.collection.busy = true;
                Restangular.all(uri).getList({gender: self.gender, per_page: self.collection.per_page, page: self.collection.after})
                    .then(function (res) {
                        var i = 0,
                            items = res.data;

                        for (i; i < items.length; i++) {
                            self.collection.items.push(items[i]);
                        }

                        self.collection.after++;
                        self.collection.busy = false;

                        if (res.current_page >= res.last_page) {
                            self.collection.ended = true;
                        }
                    })
                    .then(function (error) {

                    });
            };
            
        }]);
})();