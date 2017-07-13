(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('PlanClassService', PlanTypeService);

    /** @ngInject */
    function PlanTypeService(msApi) {

        function getHistory(entry) {
            return msApi.resolve('planclass@get', entry, {uuid: 'listDate'});
        }

        function query(params) {
            return msApi.resolve('planclass@get', params);
        }

        function get(uuid) {
            return msApi.resolve('planclass@get', {uuid: uuid});
        }

        function add(entry) {
            return msApi.resolve('planclass@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('planclass@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('planclass@remove', {}, {uuid: uuid});
        }

        return {
            query: query,
            get: get,
            add: add,
            update: update,
            getHistory: getHistory,
            remove: remove
        };
    }
})();
