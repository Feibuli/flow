(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('CommPlaceService', CommPlaceService);

    /** @ngInject */
    function CommPlaceService(msApi) {

        function query(params) {
            return msApi.resolve('commplace@get', params);
        }

        function get(uuid) {
            return msApi.resolve('commplace@get', {uuid: uuid});
        }

        function add(entry) {
            return msApi.resolve('commplace@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('commplace@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('commplace@remove', {}, {uuid: uuid});
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
