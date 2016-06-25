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

                Restangular.all(uri).getList({per_page: self.collection.perPage, page: self.collection.after})
                    .then(function (res) {
                        self.collection.after++;
                        var i = 0,
                            items = res.data;
                        
                        for (i; i < items.length; i++) {
                            self.collection.items.push(items[i]);
                        }

                        if (res.current_page >= res.last_page) {
                            self.collection.ended = true;
                        }
                    })
                    .then(function (error) {

                    });
            };
            
        }]);
})();