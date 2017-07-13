(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('getVehiclWithEmplService', getVehiclWithEmplService);

    /** @ngInject */
    function getVehiclWithEmplService(msApi) {

        function query(params) {
            return msApi.resolve('getVehiclWithEmpl@get', params);
        }

        function get(uuid) {
            return msApi.resolve('getVehiclWithEmpl@get', {uuid: uuid});
        }

        function add(entry) {
            return msApi.resolve('getVehiclWithEmpl@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('getVehiclWithEmpl@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('getVehiclWithEmpl@remove', {}, {uuid: uuid});
        }

        return {
            query: query,
            get: get,
            add: add,
            update: update,
            remove: remove
        };
    }
})();
