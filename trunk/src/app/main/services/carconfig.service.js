/**
 * Created by VPS on 2017/3/3.
 */
(function () {
    'use strict';
    angular
        .module('app.main')
        .factory('CarConfigService', CarConfigService);
    function CarConfigService(msApi, $q, $http) {
        function queryCar(params) {
            return msApi.resolve('carconfig@get', params);
        }

        function addCar(params) {
            return msApi.resolve('carconfig@save', {}, params);
        }

        function queryEmpl(params) {
            return msApi.resolve('emplconfig@get', params);
        }

        function addEmpl(params) {
            return msApi.resolve('emplconfig@save', {}, params);
        }

        function queryCarAndEmpl(params) {
            return msApi.resolve('carempl@get', params);
        }

        function addCarAndEmpl(params) {
            return msApi.resolve('carempl@save', {}, params);
        }

        return {
            queryCar: queryCar,
            addCar: addCar,
            queryEmpl: queryEmpl,
            addEmpl: addEmpl,
            queryCarAndEmpl: queryCarAndEmpl,
            addCarAndEmpl: addCarAndEmpl
        }
    }
})();