(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('CommLineService', CommLineService);

    /** @ngInject */
    function CommLineService(msApi) {

        function query(params) {
            return msApi.resolve('commline@get', params);
        }

        function get(uuid) {
            return msApi.resolve('commline@get', {uuid: uuid});
        }

        function add(entry) {
            return msApi.resolve('commline@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('commline@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('commline@remove', {}, {uuid: uuid});
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
