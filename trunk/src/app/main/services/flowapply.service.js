/**
 * Created by Administrator on 2017/6/11.
 */
(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('FlowApplyService', FlowApplyService);

    /** @ngInject */
    function FlowApplyService(msApi, $q, $http) {

        function applyFlow(entry) {
            return msApi.resolve('flowApply@save', {id: 'applyFlow'}, entry);
        }

        function getMyApply(entry) {
            return msApi.resolve('flowApply@get', entry, {});
        }

        function detailOperat(entry) {
            return msApi.resolve('flowApply@save', entry, {});
        }

        function update(entry) {
            return msApi.resolve('flowApply@update', entry, {});
        }

        function remove(uuid) {
            return msApi.resolve('flowApply@remove', {}, {uuid: uuid});
        }

        function queryNextUser(entry) {

        }

        return {
            applyFlow: applyFlow,
            getMyApply: getMyApply,
            detailOperat: detailOperat,
            update: update,
            remove: remove,
        };
    }
})();
