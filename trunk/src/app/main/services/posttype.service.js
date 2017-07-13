(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('PostTypeService', PostTypeService);

    /** @ngInject */
    function PostTypeService(msApi) {
        function query(params) {
            return msApi.resolve('post@get', params);
        }

        function queryFake(params) {
            return msApi.resolve('posttype@get', params);
        }

        function get(uuid) {
            return msApi.resolve('posttype@get', {uuid: uuid});
        }

        function add(entry) {
            return msApi.resolve('post@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('posttype@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('posttype@remove', {}, {uuid: uuid});
        }

        return {
            query: query,
            queryFake: queryFake,
            get: get,
            add: add,
            update: update,
            remove: remove
        };
    }
})();
