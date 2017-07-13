/**
 * Created by VPS on 2016/12/14.
 */
(function () {
    'use strict';
    angular
        .module('app.main')
        .factory('ReportService', ReportService);
    function ReportService(msApi, $q, $http) {
        function requestTemplate(module, params) {
            var deferred = $q.defer();
            $http.get(msApi.getBaseUrl() + 'report/' + module, {params: params}).then(function (response) {
                deferred.resolve(response.data);
            });
            return deferred.promise;
        }

        //报警信息
        function alarmForm(params) {
            return requestTemplate('alertinfo', params);
        }

        //车辆里程统计
        function busMileageSta(params) {
            return requestTemplate('busmileage', params);
        }

        //车辆趟次统计
        function busFreSta(params) {
            return requestTemplate('busranks', params);
        }

        //正点统计
        function punctuallySta(params) {
            return requestTemplate('punctual', params);
        }

        //发车明细报表
        function detailForm(params) {
            return requestTemplate('sendetail', params);
        }

        //发车准点报表
        function punctuallyForm(params) {
            return requestTemplate('sendrate', params);
        }

        //线路趟次统计
        function lineFreSta(params) {
            return requestTemplate('busline', params);
        }

        //驾驶员趟次统计
        function driverFreSta(params) {
            return requestTemplate('busempl', params);
        }

        //驾驶员考勤统计
        function driverCheckSta(params) {
            return requestTemplate('alldrivers', params);
        }

        //高峰时段趟次统计
        function peakFreSta(params) {
            return requestTemplate('buspeak', angular.extend({}, {type: '0'}, params));
        }

        return {
            alarmForm: alarmForm,
            busMileageSta: busMileageSta,
            busFreSta: busFreSta,
            punctuallySta: punctuallySta,
            detailForm: detailForm,
            punctuallyForm: punctuallyForm,
            lineFreSta: lineFreSta,
            driverFreSta: driverFreSta,
            driverCheckSta: driverCheckSta,
            peakFreSta: peakFreSta
        }
    }
})();