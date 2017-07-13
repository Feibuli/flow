/**
 * Created by VPS on 2017/3/13.
 */
(function () {
    'use strict';
    angular
        .module('app.main')
        .factory('RoleAssignmentService', RoleAssignmentService);
    function RoleAssignmentService(msApi, $http, $q) {

        function get(uuid) {
            return msApi.resolve('roleassignment@get', {uuid: uuid});
        }

        function getRole() {
            var deferred = $q.defer();
            $http.get(msApi.getAuthorityUrl() + 'common/authrole').then(function (response) {
                deferred.resolve(response.data);
            });
            return deferred.promise;
        }

        function query(params) {
            return msApi.resolve('roleassignment@get', params);
        }

        function add(queryParams, entry) {
            return msApi.resolve('roleassignment@save', queryParams, entry);
        }

        function update(entry) {
            return msApi.resolve('roleassignment@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('roleassignment@remove', {}, {uuid: uuid});
        }

        return {
            get: get,
            getRole: getRole,
            query: query,
            add: add,
            update: update,
            remove: remove
        }
    }
})();