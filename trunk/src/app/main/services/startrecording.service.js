/**
 * Created by VPS on 2017/2/24.
 */
(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('StartRecordService', StartRecordService);

    /** @ngInject */
    function StartRecordService(msApi) {

        function query(params) {
            return msApi.resolve('startrecording@get', params);
        }

        return {
            query: query
        };
    }
})();
