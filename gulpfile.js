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
    ],
    'libsJS': [
        './assets/js/jquery.min.js',
        './assets/js/bootstrap.min.js',
        './assets/js/lodash.js',
        './assets/js/moment.min.js'
    ],
    'appJS': [
        './app/app.js',
        './app/configs.js',
        './app/constants.js',
        './app/directives.js',
        './app/filters.js',
        './app/services.js',
        './app/routers.js',
        './app/components/**/*.js',
        './app/partials/sidebars/sidebars.js'
    ],
    'ieJS': [
        './app/assets/js/html5shiv.min.js',
        './app/assets/js/respond.min.js'
    ],
    'modulesJS': './app/modules/**/*.js',
    'coreCSS': './app/sass/core.scss',
    'styleCSS': './app/sass/style.scss',
    'moduleCSS': [
        './app/modules/**/*.scss',
        './app/components/**/*.scss',
    ],
    'fonts': './app/assets/fonts',
    'images': './app/assets/img',
    'indexHTML': './app/index.html',
    'viewHTML': './app/modules/**/*.html',
    'partialsHTML': './app/partials/**/*.html',
    'layoutsHTML': './app/layouts/**/*.html',
    'directivesHTML': './app/components/directives/**/*.html'
};

elixir(function (mix) {
    mix
        .sass(configs.coreCSS, './public/assets/css/core.css')
        .sass(configs.moduleCSS, './public/assets/css/modules.css')
        .sass(configs.styleCSS, './public/assets/css/style.css')
        .scripts(configs.coreJS, './public/assets/js/core.js')
        .scripts(configs.libsJS, './public/assets/js/libs.js')
        .scripts(configs.appJS, './public/assets/js/app.js')
        .scripts(configs.modulesJS, './public/assets/js/modules.js')
        .scripts(configs.ieJS, './public/assets/js/ie.js')
        .copy(configs.fonts, './public/assets/fonts/')
        .copy(configs.images, './public/assets/img/')
        .copy(configs.viewHTML, './public/views/')
        .copy(configs.partialsHTML, './public/views/partials/')
        .copy(configs.layoutsHTML, './public/views/layouts/')
        .copy(configs.directivesHTML, './public/views/directives/')
        .copy(configs.indexHTML, './public/index.html');
});