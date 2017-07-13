(function () {
    'use strict';

    angular
        .module('app.main')
        .filter('transformShow', transformShowFilter);

    /** @ngInject */
    function transformShowFilter() {
        return function (value, type, dic) {
            var result = '--';
            switch (type) {
                case 'gender':
                    result = atGender(value, dic);
                    break;
                case 'noteCode':
                    result = noteCode(value);
                    break;
                case 'nonService':
                    result = nonService(value);
                    break;
                case 'alarm':
                    result = alarm(value);
                    break;
            }
            return result;
        };
    }

    function nonService(value) {
        var result = '--';
        switch (value) {
            case 'RUNNING_REQ':
                // 1
                result = '恢复营运';
                break;
            case 'SHIFT_REQ':
                // 2
                result = '换车';
                break;
            case 'REFUEL_REQ':
                // 3
                result = '加油';
                break;
            case 'RECHARGE_REQ':
                result = '请求充电';
                // 5
                break;
            case 'GAS_REFILL_REQ':
                // 4
                result = '请求加气';
                break;
            case 'MAINTAINANCE_REQ':
                // 6
                result = '站点维修';
                break;
            case 'BUS_CHARTER_REQ':
                // 7
                result = '包车';
                break;
            case 'RUNNING_EXIT_REQ':
                // 8
                result = '退出营运';
                break;
            case 'WASH_REQ':
                // 128
                result = '洗车';
                break;
            case 'BREAK_DOWN_REQ':
                // 129
                result = '抛锚';
                break;
            case 'ACCIDENT_REQ':
                // 130
                result = '事故';
                break;
            case 'DEPARTURE_DELAY_REQ':
                // 131
                result = '稍后发车';
                break;
            case 'WORKSHOP_MANTAINANCE_REQ':
                // 132
                result = '修理厂维修';
                break;
            case 'UNKNOWN_REQ':
                // 100
                result = '未知请求';
                break;
        }
        return result;
    }

    function alarm(value) {
        var result = '--';
        switch (value) {
            case 'OVER_SPEED':
                // 1
                result = '超速';
                break;
            case 'STOP_MISSED':
                // 4
                result = '越站';
                break;
            case 'BOUNDRY_EXCEEDED':
                // 11
                result = '越界';
                break;
            case 'STOP_DETAINED':
                // 3
                result = '滞站';
                break;
            case 'UNKNOWN':
                // 100
                result = '未知';
                break;
        }
        return result;
    }

    function noteCode(value) {
        var result = '--';
        switch (value) {
            case 1:
                result = '早高峰';
                break;
            case 2:
                result = '晚高峰';
                break;
            case 3:
                result = '平峰';
                break;
            case 4:
                result = '低峰';
                break;
        }
        return result;
    }

    function atGender(value, dic) {
        var result = '--';
        angular.forEach(dic, function (data) {
            if (data.code === value) {
                result = data.name;
                return false;
            }
        });
        return result;
    }

})();