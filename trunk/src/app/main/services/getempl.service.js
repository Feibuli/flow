(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('getEmplService', getEmplService);

    /** @ngInject */
    function getEmplService(msApi) {

        function query(params) {
            return msApi.resolve('getEmpl@get', params);
        }

        function get(uuid) {
            return msApi.resolve('getEmpl@get', {uuid: uuid});
        }

        function add(entry) {
            return msApi.resolve('getEmpl@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('getEmpl@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('getEmpl@remove', {}, {uuid: uuid});
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
