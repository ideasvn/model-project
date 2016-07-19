angular.module('QSoft.directives').directive('validation', function ($compile) {
    return {
        restrict: 'EA',
        replace: false,
        terminal: true,
        priority: 1000,
        link: function (scope, elem, attrs) {
            scope.nameForm = attrs.formName;
            scope.checkValidation = false;
            var nameValidation = '{{' + attrs.name + 'Name}}';
            var stateValidation = '{{' + attrs.name + 'State}}';
            var stateScope = attrs.name + 'State';
            var nameScope = attrs.name + 'Name';
            elem.attr('uib-tooltip', nameValidation);
            elem.attr('tooltip-placement', "top");
            elem.attr('tooltip-trigger', "mouseenter");
            elem.attr('tooltip-enable', stateValidation);
            elem.removeAttr('validation');
            $compile(elem)(scope);
            var validateName = attrs.formName + '.' + attrs.name + '.$error';
            scope.$watchCollection(validateName, function (newVal, oldVal) {
                if (!_.isEmpty(newVal)) {
                    if (newVal.required) {
                        scope[nameScope] = 'this field is required';
                        scope[stateScope] = true;
                    }
                    if (newVal.minlength) {
                        scope[nameScope] = 'this field too short';
                        scope[stateScope] = true;
                    }
                    if (newVal.maxlength) {
                        scope[nameScope] = 'this field too long';
                        scope[stateScope] = true;
                    }
                    if (newVal.email) {
                        scope[nameScope] = 'this field is email';
                        scope[stateScope] = true;
                    }
                    if (newVal.duplicate) {
                        scope[nameScope] = 'this field is duplicate';
                        scope[stateScope] = true;
                    }
                    if (newVal.date) {
                        scope[nameScope] = 'this field is not date';
                        scope[stateScope] = true;
                    }
                } else {
                    scope[stateScope] = false;
                }
            })
        }
    };
});