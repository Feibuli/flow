(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('CarService', CarService);

    /** @ngInject */
    function CarService(msApi) {

        function query(params) {
            return msApi.resolve('car@get', params);
        }

        function get(uuid) {
            return msApi.resolve('car@get', {uuid: uuid});
        }

        function add(entry) {
            return msApi.resolve('car@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('car@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('car@remove', {}, {uuid: uuid});
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
