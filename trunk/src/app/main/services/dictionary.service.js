(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('DictionaryService', DictionaryService);

    /** @ngInject */
    function DictionaryService(msApi, $http, $q) {

        function getChineseCities() {
            return msApi.resolve('chinesecities@get');
        }

        function getDictionary(code) {
            return msApi.resolve('dictionary@get', {type: code});
        }

        function getDicTree(params) {
            var deferred = $q.defer();
            $http.get(msApi.getOrgUrl() + 'dict/data/tree', {params: params}).then(function (response) {
                deferred.resolve(response.data);
            }, function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        }

        return {
            getChineseCities: getChineseCities,
            getDictionary: getDictionary,
            getDicTree: getDicTree
        };
    }
})();
