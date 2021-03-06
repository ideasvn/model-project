/***
 * Home controller
 *
 * @module QSoft.modules
 * @controller HomeController
 *
 * */
(function () {
    "use strict";

    angular.module('QSoft.modules')
        .controller('HomeController', ['$scope', 'Restangular', function ($scope, Restangular) {

            var self = this,
                uriSlide = 'slides',
                uriListModel = 'models';
            self.perPage = 12;
            self.page = 1;
            self.slides = [];
            self.models = [];


            /* Get list slides */
            Restangular.all(uriSlide).getList()
                .then(function (res) {
                    self.slides = res.data;
                })
                .then(function (error) {

                });

            /* Get list models */
            Restangular.all(uriListModel).getList({per_page: self.perPage, page: self.page})
                .then(function (res) {
                    self.models = res.data;
                })
                .then(function (error) {

                });
        }]);
})();