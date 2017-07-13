(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('CorpService', CorpService);

    /** @ngInject */
    function CorpService(msApi) {

        function query(params) {
            return msApi.resolve('corp@get', params);
        }

        function get(uuid) {
            return msApi.resolve('corp@get', {uuid: uuid});
        }

        function add(entry) {
            return msApi.resolve('corp@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('corp@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('corp@remove', {}, {uuid: uuid});
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
