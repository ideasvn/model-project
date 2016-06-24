/**
 * box model
 *
 * @author Hoangdv
 * @return  scope(link, title, image)
 *
 * */
(function () {
    "use strict";
    angular.module('QSoft.directives').directive('modelBox', ['$location',
        function ($location) {
            return {
                restrict: 'EA',
                scope: {
                    data: '='
                },
                templateUrl: 'views/directives/model-box/template.html',
                link: function (scope, element, attrs) {
                    var baseUrl = 'http://' + $location.host() + ":" + $location.port();
                    
                    scope.item = {
                        link: '',
                        title: scope.data.title,
                        image: scope.data.image
                    };
                }
            };
        }
    ]);
})();