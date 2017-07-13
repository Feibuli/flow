(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('ScheduleAlertInfoService', ScheduleAlertService);

    /** @ngInject */
    function ScheduleAlertService(msApi) {

        function query(params) {
            return msApi.resolve('schedulealertinfo@get', params);
        }

        function getAlertType() {
            return msApi.resolve('schedulealertinfo@get', {}, {uuid: 'alerttype '});
        }

        function get(uuid) {
            return msApi.resolve('schedulealertinfo@get', {uuid: uuid});
        }

        function add(entry) {
            return msApi.resolve('schedulealertinfo@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('schedulealertinfo@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('schedulealertinfo@remove', {}, {uuid: uuid});
        }

        return {
            query: query,
            getAlertType: getAlertType,
            get: get,
            add: add,
            update: update,
            remove: remove
        };
    }
})();
