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
                uriSlide = 'data/home.json',
                uriListModel = '';
            self.slides = [];
            self.models = [];

            /* Get list slides */
            Restangular.all(uriSlide).getList()
                .then(function (res) {
                    self.slides = res.slides;
                })
                .then(function (error) {

                });
        }]);
})();