/**
 * Created by HL on 2017/5/11.
 */
(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('FlowService', FlowService);

    /** @ngInject */
    function FlowService(msApi, $q, $http) {

        function query(params) {
            return msApi.resolve('flowGroup@get', params);
        }

        function get(uuid) {
            return msApi.resolve('flowGroup@get', {uuid: uuid});
        }

        function add(entry) {
            return msApi.resolve('flowGroup@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('flowGroup@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('flowGroup@remove', {corpId: uuid.corpId}, {uuid: uuid.id});
        }


        /*function getCategory() {
         var deferred = $q.defer();
         $http.post(msApi.getFlowUrl() + 'queryFlowGroup').then(function (response) {
         deferred.resolve(response.data);
         });
         return deferred.promise;
         }

         function addCategory(data) {
         var deferred = $q.defer();
         $http.post(msApi.getFlowUrl() + 'saveFlowGroup',data).then(function (response) {
         deferred.resolve(response.data);
         });
         return deferred.promise;
         }

         function delCategory(data) {
         var deferred = $q.defer();
         $http.post(msApi.getFlowUrl() + 'removeFlowGroup',data).then(function (response) {
         deferred.resolve(response.data);
         });
         return deferred.promise;
         }

         function updateCategory(data) {
         var deferred = $q.defer();
         $http.post(msApi.getFlowUrl() + 'modifyFlowGroup',data).then(function (response) {
         deferred.resolve(response.data);
         });
         return deferred.promise;
         }*/

        return {
            query: query,
            get: get,
            add: add,
            update: update,
            remove: remove,
        };
    }
})();
