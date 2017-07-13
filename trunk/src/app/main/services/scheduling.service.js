/**
 * Created by VPS on 2017/6/12.
 */
(function () {
    'use strict';
    angular
        .module('app.main')
        .service('SchedulingService', SchedulingService);
    function SchedulingService($http, $q, msApi) {
        /**
         *
         * @param url
         * @param params
         * @returns promise
         */
        var dUrl = 'http://172.16.101.238:8097/itbus/',
            pUrl = 'http://172.16.101.96:8097/itbus/',
            wUrl = 'http://172.16.101.81:8097/itbus/',
            yUrl = 'http://172.16.101.144:8097/itbus/';

        function commonGetFn(url, params) {
            var deferred = $q.defer();
            $http.get(url, {params: params}).then(function (response) {
                deferred.resolve(response.data);
            }, function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        }

        function commonPostFn(url, params) {
            var deferred = $q.defer();
            $http.post(url, params).then(function (response) {
                deferred.resolve(response.data);
            }, function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        }

        function commonPutFn(url, params) {
            var deferred = $q.defer();
            $http.put(url, params).then(function (response) {
                deferred.resolve(response.data);
            }, function (response) {
                deferred.reject(response);
            });
            return deferred.promise;
        }

        function addFrontBus(params) {
            // return commonGetFn(pUrl + 'sche/ops/outsite', params);
            return commonGetFn(msApi.getWisUrl() + 'sche/ops/outsite', params);
        }

        function addBackBus(params) {
            // return commonGetFn(pUrl + 'sche/ops/insite', params);
            return commonGetFn(msApi.getWisUrl() + 'sche/ops/insite', params);
        }

        function addTimeInterval(params) {
            // return commonPostFn(msApi.getWisUrl() + '', params);
            // return commonGetFn(yUrl + 'scheveh/modiflysendinter', params);
            return commonGetFn(msApi.getWisUrl() + 'scheveh/modiflysendinter', params);
        }

        function addNonService(params) {
            // return commonPostFn(dUrl + 'sche/nonesche', params);
            return commonPostFn(msApi.getWisUrl() + 'sche/nonesche', params);
            // return commonPostFn(msApi.getWisUrl() + '', params);
        }


        function querySchedulingList(params) {
            return commonGetFn(msApi.getWisUrl() + 'scheveh/query', params);
            // return commonGetFn(yUrl + 'scheveh/query', params);
        }

        function getSchedulingList(uuid) {
            return msApi.resolve('schedulinglist@get', {uuid: uuid});
            // return msApi.resolve('schedulinglist@get', {uuid: uuid});
        }

        function addSchedulingList(params) {
            return commonPostFn(msApi.getWisUrl() + 'scheveh/addveh', params);
            // return commonPostFn(yUrl + 'scheveh/addveh', params);
            // return commonPostFn(msApi.getWisUrl() + '', params);
            // return msApi.resolve('schedulinglist@save', {}, entry);
        }

        function updateSchedulingListTime(params) {
            return commonGetFn(msApi.getWisUrl() + 'scheveh/modiflyTime', params);
            // return commonGetFn(yUrl + 'scheveh/modiflyTime', params);
        }

        function updateSchedulingListEmpl(params) {
            return commonGetFn(msApi.getWisUrl() + 'scheveh/saveempl', params);
            // return commonGetFn(yUrl + 'scheveh/saveempl', params);
        }

        function updateSchedulingListVeh(params) {
            return commonGetFn(msApi.getWisUrl() + 'scheveh/savevehl', params);
            // return commonGetFn(yUrl + 'scheveh/savevehl', params);
        }

        function updateSchedulingList(params) {
            return commonPostFn(msApi.getWisUrl() + 'scheveh/modiflyTime', params);
            // return commonPostFn(yUrl + 'scheveh/modiflyTime', params);
            // return commonPostFn(msApi.getWisUrl() + '', params);
        }

        function removeSchedulingList(params) {
            return commonGetFn(msApi.getWisUrl() + 'scheveh/delveh', params);
            // return commonGetFn(yUrl + 'scheveh/delveh', params);
        }


        function addBusNull(params) {
            // return commonPostFn(msApi.getWisUrl() + '', params);
            return commonGetFn(msApi.getWisUrl() + 'scheveh/setdesiner', params);
            // return commonGetFn(yUrl + 'scheveh/setdesiner', params);
        }

        function addFixedPoint(params) {
            return commonGetFn(msApi.getWisUrl() + 'scheveh/setvent', params);
            // return commonGetFn(yUrl + 'scheveh/setvent', params);
        }

        function getAlarms(params) {
            return commonGetFn(msApi.getWisUrl() + 'sche/alarm', params);
            // return commonGetFn(dUrl + 'sche/alarm', params);
        }

        function getBusDetails(params) {
            return commonGetFn(msApi.getWisUrl() + 'sche/ops/vehstatus', params);
            // return commonGetFn(pUrl + 'sche/ops/vehstatus', params);
        }

        function getBusStatisticsCounts(params) {
            return commonGetFn(msApi.getWisUrl() + 'sche/ops/state', params);
            // return commonGetFn(pUrl + 'sche/ops/state', params);
        }

        function getBusList(params) {
            return commonGetFn(msApi.getWisUrl() + 'sche/ops/vehicles', params);
            // return commonGetFn(pUrl + 'sche/ops/vehicles', params);
        }

        function addChangeSendBusSerial(params) {
            return commonPostFn(msApi.getWisUrl() + '', params);
            // return commonPostFn(msApi.getWisUrl() + '', params);
        }

        function addSignIn(params) {
            return commonPostFn(msApi.getWisUrl() + 'sche/sign', params);
            // return commonPostFn(dUrl + 'sche/sign', params);
        }

        function reSendMes(params) {
            return commonPostFn(msApi.getWisUrl() + 'sche/hci/resend', params);
            // return commonPostFn(dUrl + 'sche/hci/resend', params);
        }

        function addSendMes(params) {
            return commonPostFn(msApi.getWisUrl() + 'sche/hci/send', params);
            // return commonPostFn(dUrl + 'sche/hci/send', params);
        }

        function addProcessInteractions(params) {
            return commonPutFn(msApi.getWisUrl() + 'sche/nonesche', params);
            // return commonPutFn(dUrl + 'sche/nonesche', params);
        }

        function getRunRecord(params) {
            return commonGetFn(msApi.getWisUrl() + 'sche/ops/running', params);
            // return commonGetFn(pUrl + 'sche/ops/running', params);
        }

        function getSendRecord(params) {
            return commonGetFn(msApi.getWisUrl() + 'sche/record', params);
            // return commonGetFn(wUrl + 'sche/record', params);
        }

        function getBusStatisticsList(params) {
            return commonGetFn(msApi.getWisUrl() + 'sche/ops/state/vehicles', params);
            // return commonGetFn(pUrl + 'sche/ops/state/vehicles', params);
        }

        function getInteractionInfo(params) {
            return commonGetFn(msApi.getWisUrl() + 'sche/hci', params);
            // return commonGetFn(dUrl + 'sche/hci', params);
        }

        function getInteractionInfoCount(params) {
            return commonGetFn(msApi.getWisUrl() + 'sche/hci/stat', params);
            // return commonGetFn(dUrl + 'sche/hci/stat', params);
        }

        function addResumeOperation(params) {
            return commonPostFn(msApi.getWisUrl() + '', params);
            // return commonPostFn(msApi.getWisUrl() + '', params);
        }

        function getBusSelectList(params) {
            return commonGetFn(msApi.getWisUrl() + 'scheveh/queyveh', params);
            // return commonGetFn(yUrl + 'scheveh/queyveh', params);
        }

        function getEmployeeSelectList(params) {
            return commonGetFn(msApi.getWisUrl() + 'scheveh/queyempl', params);
            // return commonGetFn(yUrl + 'scheveh/queyempl', params);
        }

        function addChangeSendSerial(params) {
            return commonGetFn(msApi.getWisUrl() + 'scheveh/updateSend', params);
            // return commonGetFn(yUrl + 'scheveh/updateSend', params);
        }

        function getPlanDetail(params) {
            return commonGetFn(msApi.getWisUrl() + 'sche/ops/plan', params);
            // return commonGetFn(pUrl + 'sche/ops/plan', params);
        }

        function closeFixedPoint(params) {
            return commonGetFn(msApi.getWisUrl() + 'scheveh/cancelvent', params);
            // return commonGetFn(yUrl + 'scheveh/cancelvent', params);
        }

        return {
            getAlarms: getAlarms,                        //获取报警信息
            getBusStatisticsCounts: getBusStatisticsCounts,//获取车辆统计信息
            getBusList: getBusList,                      //获取车辆list
            getBusDetails: getBusDetails,                //获取车辆详情
            querySchedulingList: querySchedulingList,    //获取调度信息列表
            getSchedulingList: getSchedulingList,        //获取单条调度信息
            addSchedulingList: addSchedulingList,        //添加调度信息
            updateSchedulingList: updateSchedulingList,  //更新调度信息
            updateSchedulingListTime: updateSchedulingListTime, //更新调度时间信息
            updateSchedulingListEmpl: updateSchedulingListEmpl,
            updateSchedulingListVeh: updateSchedulingListVeh,
            addChangeSendSerial: addChangeSendSerial,
            removeSchedulingList: removeSchedulingList,  //删除调度信息
            addFrontBus: addFrontBus,                    //添加发车
            addBackBus: addBackBus,                      //添加回场
            addTimeInterval: addTimeInterval,            //添加时间间隔
            addNonService: addNonService,                //添加非运营调度
            addBusNull: addBusNull,                      //添加车辆放空
            addFixedPoint: addFixedPoint,                //添加定点
            closeFixedPoint: closeFixedPoint,            //取消定点
            addChangeSendBusSerial: addChangeSendBusSerial, //添加发车新序列
            addSignIn: addSignIn,                         //添加签到\退
            addSendMes: addSendMes,                       //添加新消息
            reSendMes: reSendMes,                         //重发新消息
            addProcessInteractions: addProcessInteractions, //添加人机交互处理
            getRunRecord: getRunRecord,                   //获取行车记录
            getSendRecord: getSendRecord,                 //获取发车记录
            getBusStatisticsList: getBusStatisticsList,           //获取车辆统计信息
            getInteractionInfo: getInteractionInfo,        //获取人机交互信息
            getInteractionInfoCount: getInteractionInfoCount,   //获取人机交互信息计数信息
            addResumeOperation: addResumeOperation,         //恢复运营
            getBusSelectList: getBusSelectList,             //获取bus下拉列表
            getEmployeeSelectList: getEmployeeSelectList,    //获取人员下拉列表
            getPlanDetail: getPlanDetail                  //获取车辆行车计划
        }
    }
})();