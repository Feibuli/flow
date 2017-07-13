/**
 * Created by HL on 2017/5/11.
 */
(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('EditFlowService', EditFlowService);

    /** @ngInject */
    function EditFlowService(msApi, $q, $http) {

        function query(params) {
            return msApi.resolve('flow@get', params);
        }

        function getFlow(entry) {
            return msApi.resolve('flow@get', entry);
        }

        function addFlow(entry) {
            return msApi.resolve('flow@save', {}, entry);
        }

        function setCopy(entry) {
            return msApi.resolve('flow@save', {id: 'carbonCopy'}, entry)
        }

        function add(entry) {
            return msApi.resolve('flow@save', entry)
        }

        function get(entry) {
            return msApi.resolve('flow@get', entry)
        }

        function remove(uuid) {
            return msApi.resolve('flow@remove', {}, {uuid: uuid});
        }

        function editFlow(entry) {
            return msApi.resolve('flow@update', {}, entry);
        }

        function sort(entry) {
            return msApi.resolve('flow@update', entry);
        }

        function getUser(entry) {
            return msApi.resolve('user@get', {}, entry);
        }
        
        function getUserByJob(entry) {
            return msApi.resolve('user@get', entry);
        }

        function getCondition(entry) {
            return msApi.resolve('flowSetting@get', entry);
        }

        function setApprover(entry) {
            return msApi.resolve('flowSetting@update', {}, entry);
        }

        function setFixApprover(entry) {
            return msApi.resolve('flow@update', {id: 'setAssignee'}, entry)
        }

        function updateStatus(entry) {
            return msApi.resolve('flowSetting@update', entry, {});
        }
        
        function queryEmpl(entry) {
            return msApi.resolve('user@get', entry, {});
        }

        return {
            query: query,
            getFlow: getFlow,
            addFlow: addFlow,
            editFlow: editFlow,
            remove: remove,
            getUser: getUser,
            getUserByJob: getUserByJob,
            updateStatus: updateStatus,
            setApprover: setApprover,
            add: add,
            get: get,
            setCopy: setCopy,
            sort: sort,
            getCondition: getCondition,
            setFixApprover: setFixApprover,
            queryEmpl: queryEmpl
        };
    }
})();
