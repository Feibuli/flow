(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('EmployeeService', EmployeeService);

    /** @ngInject */
    function EmployeeService(msApi) {

        function query(params) {
            return msApi.resolve('employee@get', params);
        }

        function get(uuid) {
            return msApi.resolve('employee@get', {uuid: uuid});
        }

        function add(entry) {
            return msApi.resolve('employee@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('employee@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('employee@remove', {}, {uuid: uuid});
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
