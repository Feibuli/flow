/**
 * Created by zb on 2017/3/1.
 */
(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('HolidayService', HolidayService);

    /** @ngInject */
    function HolidayService(msApi) {

        function query(params) {
            return msApi.resolve('holiday@get', params);
        }

        function get(uuid) {
            return msApi.resolve('holiday@get', {uuid: uuid});
        }

        function add(entry) {
            return msApi.resolve('holiday@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('holiday@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('holiday@remove', {}, {uuid: uuid});
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

