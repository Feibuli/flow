(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('AllAlarmInfo', AllAlarmInfo);

    /** @ngInject */
    function AllAlarmInfo(msApi) {

        function query(params) {
            return msApi.resolve('report@get',params);
        }

        function get(uuid) {
            return msApi.resolve('report@get', {uuid: uuid});
        }

        function add(entry) {
            return msApi.resolve('report@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('report@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('report@remove', {}, {uuid: uuid});
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
