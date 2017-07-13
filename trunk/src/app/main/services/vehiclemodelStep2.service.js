(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('vehicleModelTwoService', vehicleModelTwoService);

    /** @ngInject */
    function vehicleModelTwoService(msApi) {

        function query(params) {
            return msApi.resolve('vehicleModelTwo@get', params);
        }

        function get(uuid) {
            return msApi.resolve('vehicleModelTwo@get', {uuid: uuid});
        }

        function add(entry) {
            return msApi.resolve('vehicleModelTwo@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('vehicleModelTwo@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('vehicleModelTwo@remove', {}, {uuid: uuid});
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
