(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('ScheduleTypeService', ScheduleTypeService);

    /** @ngInject */
    function ScheduleTypeService(msApi) {

        function query(params) {
            return msApi.resolve('scheduletype@get', params);
        }

        function get(uuid) {
            return msApi.resolve('scheduletype@get', {uuid: uuid});
        }

        function add(entry) {
            return msApi.resolve('scheduletype@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('scheduletype@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('scheduletype@remove', {}, {uuid: uuid});
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
