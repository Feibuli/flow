(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('PlanPeriodService', PlanPeriodService);

    /** @ngInject */
    function PlanPeriodService(msApi) {

        function query(params) {
            return msApi.resolve('planperiod@get', params);
        }

        function get(uuid) {
            return msApi.resolve('planperiod@get', {uuid: uuid});
        }

        function add(entry) {
            return msApi.resolve('planperiod@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('planperiod@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('planperiod@remove', {}, {uuid: uuid});
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
