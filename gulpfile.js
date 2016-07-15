var elixir = require('laravel-elixir');
elixir.config.production = false;
elixir.config.sourcemaps = true;

var configs = {
    'coreJS': [
        './assets/js/angular.min.js',
        './assets/js/angular-animate.min.js',
        './assets/js/angular-messages.min.js',
        './assets/js/angular-message-format.min.js',
        './assets/js/angular-sanitize.min.js',
        './assets/js/restangular.min.js',
        './assets/js/ui-bootstrap.min.js',
        './assets/js/ui-router.min.js',
        './assets/js/ngMeta.min.js',
        './assets/js/angular-flash.min.js',
        './assets/js/satellizer.min.js',
        './assets/js/ngStorage.min.js',
        './assets/js/xtForm.tpl.js',
        './assets/js/datetimepicker.js',
        './assets/js/datetimepicker.templates.js',
        './assets/js/dateTimeInput.js',
        './assets/js/ng-file-upload-all.min.js',
        './assets/js/calendar.js',
        './assets/js/fullcalendar.min.js',
        './assets/js/ng-infinite-scroll.min.js'
    ],
    'libsJS': [
        './assets/js/jquery.min.js',
        './assets/js/bootstrap.min.js',
        './assets/js/lodash.js',
        './assets/js/moment.min.js'
    ],
    'appJS': [
        './src/controllers/app.js',
        './src/controllers/configs.js',
        './src/controllers/constants.js',
        './src/controllers/directives.js',
        './src/directives/**/*.js',
        './src/controllers/filters.js',
        './src/controllers/services.js',
        './src/controllers/routers.js',
        './src/controllers/components/**/*.js'
    ],
    'ieJS': [
        './assets/js/html5shiv.min.js',
        './assets/js/respond.min.js'
    ],
    'modulesJS': './src/modules/**/*.js',
    'coreCSS': './src/scss/core.scss',
    'appCSS': './src/directives/**/*.scss',
    'styleCSS': './src/scss/style.scss',
    'modulesCSS': [
        './src/layouts/scss/*.scss',
        './src/modules/**/*.scss'
    ],
    'fonts': './assets/fonts',
    'images': './assets/img',
    'indexHTML': './src/index.html',
    'viewHTML': './src/modules/**/*.html',
    'partialsHTML': './src/partials/**/*.html',
    'layoutsHTML': './src/layouts/**/*.html',
    'directivesHTML': './src/directives/**/*.html',
    'servicesHTML': './src/services/**/*.html'
};

elixir(function (mix) {
    mix
        .sass(configs.coreCSS, 'public/assets/css/core.css')
        .sass(configs.appCSS, 'public/assets/css/app.css')
        .sass(configs.modulesCSS, 'public/assets/css/modules.css')
        .sass(configs.styleCSS, 'public/assets/css/style.css')
        .scripts(configs.coreJS, 'public/assets/js/core.js')
        .scripts(configs.libsJS, 'public/assets/js/libs.js')
        .scripts(configs.appJS, 'public/assets/js/app.js')
        .scripts(configs.modulesJS, 'public/assets/js/modules.js')
        .scripts(configs.ieJS, 'public/assets/js/ie.js')
        .copy(configs.fonts, 'public/assets/fonts/')
        .copy(configs.images, 'public/assets/img/')
        .copy(configs.viewHTML, 'public/views/')
        .copy(configs.layoutsHTML, 'public/views/layouts/')
        .copy(configs.directivesHTML, 'public/views/directives/')
        .copy(configs.servicesHTML, 'public/views/services/')
        .copy(configs.indexHTML, 'public/index.html');
});