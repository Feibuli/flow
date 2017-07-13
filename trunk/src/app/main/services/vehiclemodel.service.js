(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('vehicleModelService', vehicleModelService);

    /** @ngInject */
    function vehicleModelService(msApi) {

        function query(params) {
            return msApi.resolve('vehicleModel@get', params);
        }

        function get(uuid) {
            return msApi.resolve('vehicleModel@get', {uuid: uuid});
        }

        function add(entry) {
            return msApi.resolve('vehicleModel@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('vehicleModel@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('vehicleModel@remove', {}, {uuid: uuid});
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
