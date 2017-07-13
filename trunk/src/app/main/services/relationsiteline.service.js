(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('RelativeSiteLineService', RelativeSiteLineService);

    /** @ngInject */
    function RelativeSiteLineService(msApi) {

        function query(params) {
            return msApi.resolve('relationsiteline@get', params);
        }

        function get(uuid) {
            return msApi.resolve('relationsiteline@get', {uuid: uuid});
        }

        function add(entry) {
            return msApi.resolve('relationsiteline@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('relationsiteline@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('relationsiteline@remove', {}, {uuid: uuid});
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
