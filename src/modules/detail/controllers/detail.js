angular.module('QSoft.modules').controller('DetailModelCtr', ['$scope', '$log', '$stateParams', '$compile', 'Restangular', '$stateParams', 'listBooking', 'Flash', '$localStorage', function ($scope, $log, $stateParams, $compile, Restangular, $stateParams, listBooking, Flash, $localStorage) {
        $scope.inforUser = $localStorage.userInfo;
        if ($scope.inforUser.type == 0) {
            $scope.checkShowBooking = true;
        } else if ($scope.inforUser.type == 1) {
            $scope.checkShowBooking = true;
        }
        moment.locale('fr', {
            months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
            longDateFormat: {
                LT: "HH:mm",
                LTS: "HH:mm:ss",
                L: "DD/MM/YYYY",
                LL: "D MMMM YYYY",
                LLL: "D MMMM YYYY LT",
                LLLL: "dddd D MMMM YYYY LT"
            },
            calendar: {
                sameDay: "[Aujourd'hui à] LT",
                nextDay: '[Demain à] LT',
                nextWeek: 'dddd [à] LT',
                lastDay: '[Hier à] LT',
                lastWeek: 'dddd [dernier à] LT',
                sameElse: 'L'
            },
            relativeTime: {
                future: "dans %s",
                past: "il y a %s",
                s: "quelques secondes",
                m: "une minute",
                mm: "%d minutes",
                h: "une heure",
                hh: "%d heures",
                d: "un jour",
                dd: "%d jours",
                M: "un mois",
                MM: "%d mois",
                y: "une année",
                yy: "%d années"
            },
            ordinalParse: /\d{1,2}(er|ème)/,
            ordinal: function (number) {
                return number + (number === 1 ? 'er' : 'ème');
            },
            meridiemParse: /PD|MD/,
            isPM: function (input) {
                return input.charAt(0) === 'M';
            },
            // in case the meridiem units are not separated around 12, then implement
            // this function (look at locale/id.js for an example)
            // meridiemHour : function (hour, meridiem) {
            //     return /* 0-23 hour, given meridiem token and hour 1-12 */
            // },
            meridiem: function (hours, minutes, isLower) {
                return hours < 12 ? 'PD' : 'MD';
            },
            week: {
                dow: 1, // Monday is the first day of the week.
                doy: 4  // The week that contains Jan 4th is the first week of the year.
            }
        });
        console.log(moment().fromNow());
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

        $scope.actionBooking = function () {
            var data = angular.copy($scope.node);
            data.startDate = moment(data.startDate).format('YYYY-MM-DD');
            data.endDate = moment(data.endDate).format('YYYY-MM-DD');
            data.idModel = $scope.ID;
            data.agentId = $scope.inforUser.id;
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
