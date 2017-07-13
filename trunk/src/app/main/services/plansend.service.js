(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('PlanSendService', PlanSendService);

    /** @ngInject */
    function PlanSendService(msApi) {

        function query(params) {
            return msApi.resolve('plansend@get', params);
        }

        function get(uuid) {
            return msApi.resolve('plansend@get', {
                uuid: uuid
            });
        }

        function add(entry) {
            return msApi.resolve('plansend@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('plansend@update', {}, entry);
        }

        function remove(entry) {
            return msApi.resolve('plansend@remove', entry, {
                uuid: entry.uuid
            });
        }

        function getTrain(entry) {
            return msApi.resolve('plansend@get', entry, {
                uuid: 'getTrain'
            });
        }

        function getSite(entry) {
            return msApi.resolve('plansend@get', entry, {
                uuid: 'getSite'
            });
        }

        function getvehtrain(entry) {
            return msApi.resolve('plansend@get', entry, {
                uuid: 'getvehtrain'
            });
        }

        function getTableByUuid(params) {
            return msApi.resolve('plansend@get', params, {
                uuid: 'inputquery'
            });
        }

        return {
            query: query,
            get: get,
            add: add,
            update: update,
            remove: remove,
            getTrain: getTrain,
            getSite: getSite,
            getvehtrain: getvehtrain,
            getTableByUuid: getTableByUuid
        };
    }
})();