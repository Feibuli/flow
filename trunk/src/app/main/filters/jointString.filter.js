(function () {
    'use strict';

    angular
        .module('app.main')
        .filter('jointString', jointString);

    /** @ngInject */
    function jointString() {
        return function (data, nameField) {
            var result = '';
            angular.forEach(data, function (d) {
                result += '  ' + d[nameField];
            });
            return result;
        };
    }

})();
