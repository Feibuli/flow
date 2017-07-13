(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('EmplService', DeptService);

    /** @ngInject */
    function DeptService(msApi) {
        function query(params) {
            return msApi.resolve('empl@get', params);
        }

        function get(entry) {
            return msApi.resolve('empl@get', entry, {uuid:entry.uuid});
        }

        function add(entry) {
            return msApi.resolve('empl@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('empl@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('empl@remove', {}, {uuid: uuid});
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
