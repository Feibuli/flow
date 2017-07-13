(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('PlanSendPreViewService', PlanSendPreViewService);

    /** @ngInject */
    function PlanSendPreViewService(msApi) {

        function query(params) {
            return msApi.resolve('plansendpreview@get', params);
        }

        function get(uuid) {
            return msApi.resolve('plansendpreview@get', {uuid: uuid});
        }

        function add(entry) {
            return msApi.resolve('plansendpreview@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('plansendpreview@update', {}, entry);
        }

        function remove(entry) {
            return msApi.resolve('plansendpreview@remove', entry, {uuid:entry.uuid});
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
