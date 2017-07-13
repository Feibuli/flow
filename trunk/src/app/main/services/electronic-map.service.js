/**
 * Created by VPS on 2017/4/11.
 */
(function () {
    'use strict';
    angular
        .module('app.main')
        .factory('ElectronicMapService', ElectronicMapService);
    function ElectronicMapService() {
        function getAll(params) {
            return msApi.resolve('electronicmap@get', params);
        }

        return {
            getAll: getAll
        };
    }
})();