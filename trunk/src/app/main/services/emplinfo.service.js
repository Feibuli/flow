/**
 * Created by VPS on 2017/3/13.
 */
(function () {
    'use strict';
    angular
        .module('app.main')
        .factory('EmplInfoService', EmplInfoService);
    function EmplInfoService(msApi, $http, $q) {
        function querySearch(params) {
            return msApi.resolve('emplsearch@get', params);
        }

        function queryByPost(postId) {
            var deferred = $q.defer();
            $http.get(msApi.getWisUrl() + 'empl/bypost?postId=' + postId).then(function (response) {
                deferred.resolve(response.data);
            });
            return deferred.promise;
        }

        function query(params) {
            return msApi.resolve('emplinfo@get', params);
        }

        function get(uuid) {
            return msApi.resolve('emplinfo@get', {uuid: uuid});
        }

        function add(entry) {
            return msApi.resolve('emplinfo@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('emplinfo@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('emplinfo@remove', {}, {uuid: uuid});
        }

        return {
            get: get,
            querySearch: querySearch,
            queryByPost: queryByPost,
            query: query,
            add: add,
            update: update,
            remove: remove
        }
    }
})();