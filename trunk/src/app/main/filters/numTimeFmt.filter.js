/**
 * Created by VPS on 2017/2/16.
 */
(function () {
    'use strict';
    angular
        .module('app.main')
        .filter('numTimeFmt', numTimeFmt);

    /** @ngInject */
    function numTimeFmt() {
        return function showDateTime(min) {
            if (min === null) {
                return '--';
            } else {
                var hour = parseInt(min / 60),
                    m = min % 60;
                if (isNaN(hour)) {
                    return '--';
                } else {
                    hour < 10 && (hour = '0' + hour);
                    m < 10 && (m = '0' + m);
                    return hour + ':' + m;
                }
            }
        };
    }
})();
