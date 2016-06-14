angular.module('QSoft.constants').constant('QSConfig', {
    ITEMS_PER_PAGE: [10, 20, 40, 60],
    TYPE_NUMBER: [
        {id: '1', value: 'SGD'},
        {id: '2', value: 'USD'},
        {id: '3', value: 'AUD'},
        {id: '4', value: 'CNY'},
    ],
    API_URI: 'serverapi/public/api/v1',
    NUMBER_SEMESTER: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    NUMBER_OF_TUTORIAL_CLASSES: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    NUMBER_OF_LECTURE_CLASSES: [1, 2, 3, 4, 5],
    MAKEONLYCLASSES: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    ROLE_TYPE: [
        {id: 'Staff', value: 'Staff'},
        {id: 'Recruitment Agent', value: 'Recruitment Agent'},
        {id: 'Academics', value: 'Academics'}
    ],
    COURSE_TYPE: [
        {id: 1, name: 'Module Based Semesters: Part-time'},
        {id: 2, name: 'Module Based Semesters: Full-time'},
        {id: 3, name: 'Instalment-based Terms: Part-time'},
        {id: 4, name: 'Instalment-based Terms: Full-time'},
        {id: 5, name: 'Workshop/Seminar: Ad-hoc'}
    ],
    CERTIFICATION_TYPE: [
        {id: 1, name: 'Bachelor'},
        {id: 2, name: 'Master Degree'},
        {id: 3, name: 'Diploma'},
        {id: 4, name: 'Certificate'},
    ],
    STATUS: [
        {id: 1, name: 'Active'},
        {id: 0, name: 'Inactive'},
    ],
    SPONSOR_TYPE: [
        {id: 1, value: 'Funding body'},
        {id: 2, value: 'Hospital'},
        {id: 3, value: 'SDF scheme'},
    ],
    COURSE_FUNDING: [
        {id: 0, name: 'None'},
        {id: 1, name: 'Available'},
    ],
    GENDER: [
        {id: 0, name: 'Male'},
        {id: 1, name: 'Female'}
    ],
    INDENTIFICATIONS: [
        {id: 1, name: 'Singapore Citizen'},
        {id: 2, name: 'Singapore PR'},
        {id: 3, name: 'Student pass'},
        {id: 4, name: 'Employment pass'},
        {id: 5, name: 'Dependent Pass'},
        {id: 6, name: 'Work permit'},
        {id: 7, name: 'Immigration exemption order'},
    ],
    TRAININGCENTERS: [
        {id: 'singapore', name: 'Singapore'},
        {id: 'offshore', name: 'Offshore'}
    ],
    DISPLAY_GRANT_ALL: [1, 2],
    DISPLAY_GRANT_COURSE: [3, 4, 5],
    COUNTRY_DEFAULT: 746, //Singapore
    USER_TYPES: [
        {code: 'PERSON', name: 'Persons'},
        {code: 'STAFF', name: 'Staff'},
        {code: 'ACADEMICS', name: 'Academics'},
        {code: 'RECRUITMENT_AGENT', name: 'Recruitment Agent'},
        {code: 'CONTACT_PERSON', name: 'Contact Person'}
    ]
});