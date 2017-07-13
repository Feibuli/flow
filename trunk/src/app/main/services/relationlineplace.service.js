(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('RelativeLinePlaceService', RelativeLinePlaceService);

    /** @ngInject */
    function RelativeLinePlaceService(msApi) {

        function query(params) {
            return msApi.resolve('relationlineplace@get', params);
        }

        function get(uuid) {
            return msApi.resolve('relationlineplace@get', {uuid: uuid});
        }

        function add(entry) {
            return msApi.resolve('relationlineplace@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('relationlineplace@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('relationlineplace@remove', {}, {uuid: uuid});
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
