angular.module('QSoft.configs')
    .config(['ngMetaProvider', 'FlashProvider', function (ngMetaProvider, FlashProvider) {
            ngMetaProvider.useTitleSuffix(true);
            ngMetaProvider.setDefaultTitle('Home');
            ngMetaProvider.setDefaultTitleSuffix(' | CSM Academy');
            ngMetaProvider.setDefaultTag('author', 'CSM Academy');

            FlashProvider.setTimeout(3000);
            FlashProvider.setShowClose(true);
        }])
    .run(['ngMeta', function (ngMeta) {
            ngMeta.init();
        }])
    .config(['xtFormConfigProvider', function (xtFormConfigProvider) {

            // Override default error messages
            xtFormConfigProvider.setErrorMessages({
                duplicate: 'This field is duplicate'
            });
        }]);

