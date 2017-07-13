(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('BusStationService', BusStationService);

    /** @ngInject */
    function BusStationService(msApi) {

        function query(params) {
            return msApi.resolve('busstation@get', params);
        }

        function get(uuid) {
            return msApi.resolve('busstation@get', {uuid: uuid});
        }

        function add(entry) {
            return msApi.resolve('busstation@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('busstation@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('busstation@remove', {}, {uuid: uuid});
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
