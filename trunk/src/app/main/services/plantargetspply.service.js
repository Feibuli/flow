(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('PlanTargetSpplyService', PlanTargetSpplyService);

    /** @ngInject */
    function PlanTargetSpplyService(msApi) {

        function query(params) {
            return msApi.resolve('targetspply@get', params);
        }

        function get(uuid) {
            return msApi.resolve('targetspply@get', {uuid: uuid});
        }

        function add(entry) {
            return msApi.resolve('targetspply@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('targetspply@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('targetspply@remove', {}, {uuid: uuid});
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
