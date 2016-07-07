angular.module('QSoft.services').config(['RestangularProvider', '$localStorageProvider', 'QSConfig', function (RestangularProvider, $localStorageProvider, QSConfig) {
        var token = $localStorageProvider.get('token');

        RestangularProvider.setBaseUrl(QSConfig.API_URI);
        RestangularProvider.addResponseInterceptor(function (data, operation) {
            var extractedData = [];
            _.map(data, function (value, key) {
                extractedData[key] = value;
            });
            return extractedData;
        });

        RestangularProvider.setDefaultHeaders({
            Authorization: token || ''
        });

        RestangularProvider.setDefaultRequestParams('get', {
            rwobj: 1,
            sort: '[{"property":"id","direction":"DESC"}]'
        });
    }]);


