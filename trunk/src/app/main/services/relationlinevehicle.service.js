(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('RelationLineVehicleService', RelationLineVehicleService);

    /** @ngInject */
    function RelationLineVehicleService(msApi) {

        function query(params) {
            return msApi.resolve('relationlinevehicle@get', params);
        }

        function get(uuid) {
            return msApi.resolve('relationlinevehicle@get', {uuid: uuid});
        }

        function add(entry) {
            return msApi.resolve('relationlinevehicle@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('relationlinevehicle@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('relationlinevehicle@remove', {}, {uuid: uuid});
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
