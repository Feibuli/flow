(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('RelativeLineEmplService', RelativeLineEmplService);

    /** @ngInject */
    function RelativeLineEmplService(msApi) {

        function query(params) {
            return msApi.resolve('relationlineempl@get', params);
        }

        function get(uuid) {
            return msApi.resolve('relationlineempl@get', {uuid: uuid});
        }

        function add(entry) {
            return msApi.resolve('relationlineempl@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('relationlineempl@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('relationlineempl@remove', {}, {uuid: uuid});
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
