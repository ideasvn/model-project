angular.module('QSoft.modules').controller('DetailModelCtr', ['$scope', '$log', '$stateParams', '$compile', 'Restangular', '$stateParams', 'listBooking', function ($scope, $log, $stateParams, $compile, Restangular, $stateParams, listBooking) {
        $scope.checkBooking = false;
        $scope.ID = $stateParams.id;
        $scope.events = [];
        $scope.detailModel = {
            images: [{id: 1, value: 'img/model/1.jpg'}, {id: 2, value: 'img/model/1.jpg'}, {id: 3, value: 'img/model/1.jpg'}],
            roundBrest: 90,
            waistSize: 90,
            roundHip: 90,
            dressSize: 90,
            shoreSize: 90,
            hairColor: 'đen',
            eyeColor: 'đen',
            height: '1m80',
        };
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();
        console.log(listBooking);
        angular.forEach(listBooking, function (val, key) {
            $scope.events.push({title: val.title, start: new Date(val.startTime), end: new Date(val.endTime)});
        })
        /* event source that contains custom events on the scope */

        /* Render Tooltip */
        $scope.eventRender = function (event, element, view) {
            element.attr({'tooltip': event.title,
                'tooltip-append-to-body': true});
            $compile(element)($scope);
        };
        /* config object */
        $scope.uiConfig = {
            calendar: {
                height: 450,
                editable: true,
                eventLimit: true,
                header: {
                    left: 'title',
                    center: '',
                    right: 'today prev,next'
                },
                eventClick: $scope.alertOnEventClick,
            }
        };


        /* event sources array*/
        $scope.eventSources = [$scope.events];
    }]);
