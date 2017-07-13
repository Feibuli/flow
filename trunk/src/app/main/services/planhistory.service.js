(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('PlanHistoryService', PlanHistoryService);

    /** @ngInject */
    function PlanHistoryService(msApi) {

        function query(params) {
            return msApi.resolve('planHistory@get', params);
        }

        function get(uuid) {
            return msApi.resolve('planHistory@get', {uuid: uuid});
        }

        function add(entry) {
            return msApi.resolve('planHistory@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('planHistory@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('planHistory@remove', {}, {uuid: uuid});
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
