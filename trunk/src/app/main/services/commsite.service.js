(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('CommSiteService', CommSiteService);

    /** @ngInject */
    function CommSiteService(msApi) {

        function query(params) {
            return msApi.resolve('commsite@get', params);
        }

        function get(uuid) {
            return msApi.resolve('commsite@get', {uuid: uuid});
        }

        function add(entry) {
            return msApi.resolve('commsite@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('commsite@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('commsite@remove', {}, {uuid: uuid});
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
