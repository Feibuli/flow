/**
 * Created by zb on 2017/3/21.
 */
(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('LineemplVehicle', LineemplVehicle);

    /** @ngInject */
    function LineemplVehicle(msApi) {

        function query(params) {
            return msApi.resolve('lineemplvehicle@get', params);
        }

        function getVehicles(params) {
            return msApi.resolve('lineemplvehicle@get', params , {uuid:'vehicleempl'});
        }

        function getEmpls(params) {
            return msApi.resolve('lineemplvehicle@get', params , {uuid:'empl'});
        }

        function add(entry) {
            return msApi.resolve('lineemplvehicle@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('lineemplvehicle@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('lineemplvehicle@remove', {}, {uuid: uuid});
        }

        return {
            query: query,
            getVehicles: getVehicles,
            getEmpls:getEmpls,
            add: add,
            update: update,
            remove: remove
        };
    }
})();

