(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('StationService', StationService);

    /** @ngInject */
    function StationService(msApi) {

        function query(params) {
            return msApi.resolve('station@get', params);
        }

        function get(uuid) {
            return msApi.resolve('station@get', {uuid: uuid});
        }

        function add(entry) {
            return msApi.resolve('station@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('station@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('station@remove', {}, {uuid: uuid});
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
