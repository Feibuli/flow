(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('BusStopService', BusStopService);

    /** @ngInject */
    function BusStopService(msApi) {

        function query(params) {
            return msApi.resolve('busstop@get', params);
        }

        function get(uuid) {
            return msApi.resolve('busstop@get', {uuid: uuid});
        }

        function add(entry) {
            return msApi.resolve('busstop@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('busstop@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('busstop@remove', {}, {uuid:uuid});
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
