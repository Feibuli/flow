/**
 * Created by VPS on 2017/4/17.
 */
(function () {
    'use strict';
    angular
        .module('app.main')
        .filter('siteStatusIconFilter', siteStatusIconFilter);
    function siteStatusIconFilter() {
        return function (value) {
            switch (value) {
                case '1'://停车场
                    return 'icon-depot';
                case '2'://加油站
                    return 'icon-filling-station';
                case '3'://维修厂
                    return 'icon-servicing';
                case '4'://充电站
                    return 'icon-gas-station2';
                default:
                    return 'icon-depot';
            }
        }
    }
})();