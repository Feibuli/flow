(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('BusLineService', BusLineService);

    /** @ngInject */
    function BusLineService(msApi) {

        function query(params) {
            return msApi.resolve('busline@get', params);
        }

        function get(uuid) {
            return msApi.resolve('busline@get', {uuid: uuid});
        }

        function add(entry) {
            return msApi.resolve('busline@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('busline@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('busline@remove', {}, {uuid: uuid});
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
