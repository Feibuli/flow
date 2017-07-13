/**
 * Created by VPS on 2017/3/11.
 */
(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('OrganizationService', OrganizationService);

    /** @ngInject */
    function OrganizationService(msApi) {

        function query(params) {
            return msApi.resolve('organization@get', params);
        }

        function get(uuid) {
            return msApi.resolve('organization@get', {uuid: uuid});
        }

        function add(entry) {
            return msApi.resolve('organization@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('organization@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('organization@remove', {}, {uuid: uuid});
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
