(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('RelationGroupLineService', RelationGroupLineService);

    /** @ngInject */
    function RelationGroupLineService(msApi) {

        function query(params) {
            return msApi.resolve('relationgroupline@get', params);
        }

        function get(uuid) {
            return msApi.resolve('relationgroupline@get', {uuid: uuid});
        }

        function add(entry) {
            return msApi.resolve('relationgroupline@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('relationgroupline@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('relationgroupline@remove', {}, {uuid: uuid});
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
