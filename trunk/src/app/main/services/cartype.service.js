(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('CarTypeService', CarTypeService);

    /** @ngInject */
    function CarTypeService(msApi) {

        function query(params) {
            return msApi.resolve('cartype@get', params);
        }

        function get(uuid) {
            return msApi.resolve('cartype@get', {uuid: uuid});
        }

        function add(entry) {
            return msApi.resolve('cartype@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('cartype@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('cartype@remove', {}, {uuid: uuid});
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
