angular.module('QSoft.constants').constant('QSConfig', {
    ITEMS_PER_PAGE: [10, 20, 40, 60],
    API_URI: 'serverapi/public/api',
    NUMBER_SEMESTER: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    NUMBER_OF_TUTORIAL_CLASSES: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    NUMBER_OF_LECTURE_CLASSES: [1, 2, 3, 4, 5],
    MAKEONLYCLASSES: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],

    STATUS: [
        {id: 1, name: 'Active'},
        {id: 0, name: 'Inactive'},
    ],
    GENDER: [
        {id: 0, name: 'Male'},
        {id: 1, name: 'Female'}
    ]
});