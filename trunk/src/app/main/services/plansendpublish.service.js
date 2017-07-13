(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('PlanSendPublishService', PlanSendPublishService);

    /** @ngInject */
    function PlanSendPublishService(msApi) {

        function query(params) {
            return msApi.resolve('plansendpublish@get', params);
        }

        function get(uuid) {
            return msApi.resolve('plansendpublish@get', {uuid: uuid});
        }

        function add(entry) {
            return msApi.resolve('plansendpublish@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('plansendpublish@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('plansendpublish@remove', {}, {uuid: uuid});
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
