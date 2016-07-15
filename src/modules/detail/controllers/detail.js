angular.module('QSoft.modules').controller('DetailModelCtr', ['$scope', '$log', '$stateParams', '$compile', 'Restangular', '$stateParams', 'listBooking', 'Flash', function ($scope, $log, $stateParams, $compile, Restangular, $stateParams, listBooking, Flash) {
        $scope.checkBooking = false;
        $scope.ID = $stateParams.id;
        $scope.events = [];
        $scope.node = {
            startDate: moment(new Date()).format('YYYY-MM-DD'),
            endDate: moment(new Date()).format('YYYY-MM-DD'),
            startHours: '09',
            endHours: '10',
            startMins: '00',
            endMins: '00'
        }
        Restangular.one('users').one($scope.ID).get().then(function (res) {
            var res = res.data;
            $scope.detailModel = {
                images: _.map(res.galleries, function (o) {
                    return o.images;
                }),
                roundBrest: res.profile.round_breast,
                waistSize: res.profile.waist_size,
                roundHip: res.profile.round_hip,
                dressSize: res.profile.dress_size,
                shoreSize: res.profile.shore_size,
                hairColor: res.profile.hair_color,
                eyeColor: res.profile.eye_color,
                height: res.profile.height,
            };
        });

        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();
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
                dayClick: function (date, jsEvent, view) {
                    $scope.node.startDate = moment(date.format()).format('YYYY-MM-DD');
                },
            }
        };
        $scope.$watch('node.startDate', function (newVal, oldVal) {
            if (newVal) {
                $scope.node.endDate = newVal;
            }
        })

        $scope.booking = function () {
            var data = angular.copy($scope.node);
            data.startDate = moment(data.startDate).format('YYYY-MM-DD');
            data.endDate = moment(data.endDate).format('YYYY-MM-DD');
            data.idModel = $scope.ID;
            Restangular.all('check-date').post(data).then(function (res) {
                if (res.status_code == 200) {
                    Restangular.all('booking').post(data).then(function (res) {
                        Flash.create('success', "Booking lịch cho model thành công");
                    });
                } else if (res.status_code == 400) {
                    Flash.create('danger', "Lịch này đã trùng");
                }
            })
        }
        /* event sources array*/
        $scope.eventSources = [$scope.events];
    }]);
