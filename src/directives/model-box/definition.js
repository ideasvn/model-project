/**
 * box model
 *
 * @author Hoangdv
 * @return  scope(link, title, image)
 *
 * */
(function () {
    "use strict";

    angular.module('QSoft.directives')
        .directive('modelBox', ['$location',
            function ($location) {
                return {
                    restrict: 'EA',
                    scope: true,
                    templateUrl: 'views/directives/model-box/template.html',
                    link: function (scope, element, attrs) {
                        var baseUrl = 'http://' + $location.host() + ":" + $location.port();
                        var data = scope.item;

                        scope.data = {
                            link: '',
                            title: (data.first_name ? data.first_name : '') + ' ' + (data.last_name ? data.last_name : ''),
                            image: data.galleries.length ? data.galleries[0].images : 'default.jpg'
                        };
                    }
                };
            }
        ]);
})();