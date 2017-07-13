(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('PlanTimeTargetService', PlanTimeTargetService);

    /** @ngInject */
    function PlanTimeTargetService(msApi) {

        function query(params) {
            return msApi.resolve('planTimeTarget@get', params);
        }

        function get(uuid) {
            return msApi.resolve('planTimeTarget@get', {uuid: uuid});
        }

        function add(entry) {
            return msApi.resolve('planTimeTarget@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('planTimeTarget@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('planTimeTarget@remove', {}, {uuid: uuid});
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
