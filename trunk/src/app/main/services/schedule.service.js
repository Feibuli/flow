/**
 * Created by VPS on 2016/12/9.
 */
(function () {
    'use strict';
    angular
        .module('app.main')
        .factory('ScheduleService', ScheduleService);
    function ScheduleService(msApi, $http, $q) {
        function getBusNum(lineId, sendDate) {
            var deferred = $q.defer();
            $http.get(msApi.getBaseUrl() + 'schedule/querybusquantity?lineId=' + lineId + '&sendDate=' + sendDate).then(function (response) {
                deferred.resolve(response.data);
            });
            return deferred.promise;
        }

        function sendMes(params) {
            var deferred = $q.defer();
            $http.post(msApi.getBaseUrl() + 'schedule/operational', params).then(function (response) {
                deferred.resolve(response.data);
            });
            return deferred.promise;
        }

        function manualCar(params) {
            var deferred = $q.defer();
            $http.post(msApi.getBaseUrl() + 'schedule/realisyRecord', params).then(function (response) {
                deferred.resolve(response.data);
            });
            return deferred.promise;
        }

        return {
            getBusNum: getBusNum,
            sendMes: sendMes,
            manualCar: manualCar
        }
    }
})();