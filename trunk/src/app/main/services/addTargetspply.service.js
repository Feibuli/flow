(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('AddTargetspplyService', AddTargetspplyServiceProvider);

    /** @ngInject */
    function AddTargetspplyServiceProvider(msApi) {

        function query(params) {
            return msApi.resolve('addTargetspply@get', params);
        }

        function getAlertType() {
            return msApi.resolve('addTargetspply@get', {}, {uuid: 'alerttype '});
        }

        function get(uuid) {
            return msApi.resolve('addTargetspply@get', {uuid: uuid});
        }

        function add(entry) {
            return msApi.resolve('addTargetspply@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('addTargetspply@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('addTargetspply@remove', {}, {uuid: uuid});
        }

        return {
            query: query,
            getAlertType: getAlertType,
            get: get,
            add: add,
            update: update,
            remove: remove
        };
    }
})();
