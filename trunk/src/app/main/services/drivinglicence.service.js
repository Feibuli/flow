(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('DrivingLicenceService', DrivingLicenceService);

    /** @ngInject */
    function DrivingLicenceService(msApi) {

        function query(params) {
            return msApi.resolve('drivinglicence@get', params);
        }

        function get(uuid) {
            return msApi.resolve('drivinglicence@get', {uuid: uuid});
        }

        function add(entry) {
            return msApi.resolve('drivinglicence@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('drivinglicence@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('drivinglicence@remove', {}, {uuid: uuid});
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
