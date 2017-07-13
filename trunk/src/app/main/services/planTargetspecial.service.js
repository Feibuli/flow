(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('PlanTargetspecialService', PlanTargetspecialService);

    /** @ngInject */
    function PlanTargetspecialService(msApi) {
        
        function query(params) {
            return msApi.resolve('planTargetspecial@get', params);
        }

        function get(uuid) {
            return msApi.resolve('planTargetspecial@get', {uuid: uuid});
        }

        function add(entry) {
            return msApi.resolve('planTargetspecial@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('planTargetspecial@update', {}, entry);
        }

        function remove(entry) {
            return msApi.resolve('planTargetspecial@remove', entry, {uuid: entry.uuid});
        }

        return {
            query: query,
            get: get,
            add: add,
            update: update,
            remove: remove,
        };
    }
})();
