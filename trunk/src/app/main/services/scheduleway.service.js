(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('ScheduleWayService', ScheduleWayService);

    /** @ngInject */
    function ScheduleWayService(msApi) {

        function query(params) {
            return msApi.resolve('scheduleway@get', params);
        }

        function get(uuid) {
            return msApi.resolve('scheduleway@get', {uuid: uuid});
        }

        function add(entry) {
            return msApi.resolve('scheduleway@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('scheduleway@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('scheduleway@remove', {}, {uuid: uuid});
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
