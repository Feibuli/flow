(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('PlanTypeService', PlanTypeService);

    /** @ngInject */
    function PlanTypeService(msApi) {

        function query(params) {
            return msApi.resolve('plantype@get', params);
        }

        function get(uuid) {
            return msApi.resolve('plantype@get', {uuid: uuid});
        }
        function getLine(lineId) {
            return msApi.resolve('plantype@get', {lineId: lineId});
        }
        function add(entry) {
            return msApi.resolve('plantype@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('plantype@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('plantype@remove', {}, {uuid: uuid});
        }

        return {
            query: query,
            get: get,
            add: add,
            update: update,
            remove: remove,
            getLine: getLine
        };
    }
})();
