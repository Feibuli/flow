(function () {
    'use strict';

    angular
        .module('app.main')
        .filter('dateFmt', dateFmtFilter);

    /** @ngInject */
    function dateFmtFilter() {
        return function (value, fmt) {
            return value ? moment(value).format(fmt) : '--';
        };
    }

})();
