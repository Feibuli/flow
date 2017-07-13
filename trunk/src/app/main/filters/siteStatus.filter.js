/**
 * Created by VPS on 2017/4/17.
 */
(function () {
    'use strict';
    angular
        .module('app.main')
        .filter('siteStatusFilter', siteStatusFilter);
    function siteStatusFilter() {
        return function (value) {
            switch (value) {
                case '1'://停车场
                    return '停车场';
                case '2'://加油站
                    return '加油站';
                case '3'://维修厂
                    return '维修厂';
                case '4'://充电站
                    return '充电站';
                default:
                    return '停车场';
            }
        }
    }
})();