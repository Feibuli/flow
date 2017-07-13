(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('LineStopService', LineStopService);

    /** @ngInject */
    function LineStopService(msApi,$q,$http) {

        function query(params) {
            return msApi.resolve('linestop@get', params);
        }

        function get(uuid) {
            return msApi.resolve('linestop@get', {uuid: uuid});
        }

        function add(entry) {
            return msApi.resolve('linestop@save', {}, entry);
        }

        function update(entry) {
            return msApi.resolve('linestop@update', {}, entry);
        }

        function remove(uuid) {
            return msApi.resolve('linestop@remove', {}, {uuid: uuid});
        }
        function synchronize(lineId,upDown){
            var deferred = $q.defer();
            $http.post(msApi.getBaseUrl() + 'common/linestop/synchronize?lineid='+lineId+'&updown='+upDown).then(function (response) {
                deferred.resolve(response.data);
            }, function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        }

        return {
            query: query,
            get: get,
            add: add,
            update: update,
            remove: remove,
            synchronize: synchronize
        };
    }
})();
