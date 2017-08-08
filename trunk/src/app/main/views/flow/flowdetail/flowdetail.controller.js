/**
 * Created by Administrator on 2017/7/13.
 */
(function () {
    'use strict';

    angular
        .module('app.flow')
        .controller('FlowDetailController', FlowDetailController);

    function FlowDetailController(Util, FlowApplyService, EditFlowService) {
        var vm = this;
        vm.agreeOrDisagree = agreeOrDisagree;
        vm.quickOrCancel = quickOrCancel;

        // 接收原生数据
        Util.setupWebViewJavascriptBridge(function (bridge) {
            // 入口类型 touchTpye 1.我发起的 2.待我处理 3.抄送我的
            bridge.registerHandler('JavascriptHandlerTouchTpye', function (data, responceCallback) {
                data = angular.fromJson(data);
                vm.type = angular.fromJson(data.touchTpye);
            });
            // 详情配置
            bridge.registerHandler('testJavascriptHandler', function (data, responseCallback) {
                data = angular.fromJson(data);
                getDetail(data);
                window.cbk();
            });
        });

        // 原生调用
        Util.setupWebViewJavascriptBridge(function (bridge) {
            vm.callNative = function () {

            };
            vm.showToast = function (messge) {
                bridge.callHandler('testObjcCallback', {'messge': messge}, function (response) {
                });
            };

        })

        function getDetail(validList) {
            var data = {
                id: 'getProcessDetail',
                corpId: 250,
                procInstId: validList.procInstId,
                viewType: vm.type
            }
            if(vm.type == 1) {
                data.userId = 102878;
            }
            FlowApplyService.getMyApply(data).then(function (res) {
                vm.validList = res.beans[0];
                if (vm.validList.currentAssignee) {
                    var arr = vm.validList.currentAssignee;
                    vm.validList.currentAssignee = typeof arr == 'object' ? arr.join(',') : arr;
                }
                angular.forEach(vm.validList.steps, function (item) {
                    if (item.content) {
                        item.content = angular.fromJson(item.content);
                    }
                });
                var waitTime = vm.validList.waitTime.split('');
                if (waitTime[0] == '0') {
                    waitTime = waitTime.slice(2);
                    if (waitTime[0] == '0') {
                        waitTime = waitTime.slice(3);
                    }
                }
                vm.validList.waitTime = waitTime.join('');
            }, function () {
                Util.showToast('服务器出错了')
            });
        }

        // 同意或驳回
        function agreeOrDisagree(type) {
            vm.response = false;
            vm.data = {
                id: type,
                procInstId: vm.validList.procInstId,
                userId: 102878,
                corpId: 250,
                remark: vm.comment
            };
            // 多人接收一人审批节点时需传入claimUserId
            vm.validList.approveType == '2' ? vm.data.claimUserId = vm.emplId : '';
            switch (vm.validList.flowCfgResp.type) {
                case '1':
                    // 固定流
                    if (type = 'disAgree') {
                        detailOperat(vm.data, 'waitMe');
                        return;
                    }
                    FlowApplyService.getMyApply({
                        id: 'queryCheckingNextUser',
                        proceInstId: vm.validList.procInstId,
                        corpId: vm.corpId,
                        jsonData: vm.validList.steps[0].content,
                        flowCode: vm.validList.flowCfgResp.code,
                    }).then(function (res) {
                        vm.elem = {
                            title: '审批人',
                            selectedElem: null,
                            model: null,
                            placeholder: '至少选择一名员工',
                            required: true,
                            data: [],
                            nameField: 'name',
                            valueField: 'uuid',
                        };
                        if (!processNodeTask(res.ext)) {
                            return;
                        }
                        openDialog();
                    });
                    break;
                case '2':
                    // 自由流
                    detailOperat(vm.data, 'waitMe');
                    break;
            }
        }

        // 催办或撤回
        function quickOrCancel(type) {
            vm.response = false;
            var data = {
                id: type,
                procInstId: vm.validList.procInstId,
                userId: vm.emplId,
                corpId: vm.corpId,
                flowCode: vm.validList.flowCfgResp.code
            }
            detailOperat(data, 'myApply');
        }

        // 获取固定流下一步审批人
        function processNodeTask(dataResp) {
            if (dataResp["nodeType"] == null) {
                Util.showToast('流程条件错误找不到下一步审批人');
                return false;
            }
            // nodeType 0:开始 1:结束 2:提交申请 3:任务节点 4:多人会签中节点
            if (dataResp["nodeType"] == "1") {                                  // 结束节点
                detailOperat(vm.data, 'waitMe');
                return false;
            } else if (dataResp["nodeType"] == "4") {                           // 多人会签中节点
                detailOperat(vm.data, 'waitMe');
                return false;
            } else if (dataResp["nodeType"] == "3") {                           // 任务节点
                // approveType 0:单人审批 1:多人审批会签 2:多人接收一人审批
                var approveType = dataResp["approveType"];                      // 审批类型
                var assigneeType = dataResp["assigneeType"];                    // 审批人类型
                var assinessList = dataResp["assigness"];
                // 单人审批
                if (approveType == "0") {
                    // 单人审批（人） 展现方式：弹窗选单人
                    if (assigneeType == "0") {
                        vm.elem.data = assinessList;
                        return true;
                    } else if (assigneeType == "1") {
                        // 单人审批(职位) 展现方式：弹窗选该职位下单人
                        EditFlowService.getUserByJob({
                            postId: assinessList[0].uuid,
                            id: 'queryEmplWithPost'
                        }).then(function (res) {
                            var arr = res.beans.map(function (item) {
                                return {
                                    name: item.name,
                                    uuid: item.uuid
                                }
                            });
                            vm.elem.data = arr;
                        });
                        return true;
                    }
                } else if (approveType == "1") {
                    // 多人审批会签 展现方式：不展示
                    var arr = assinessList.map(function (item) {
                        return item.uuid;
                    });
                    vm.data.nextAssigneeId = arr.join(',');
                    detailOperat(vm.data, 'waitMe');
                    return false;
                } else if (approveType == "2") {
                    // 多人接收一人审批 展现方式：不展示
                    detailOperat(vm.data, 'waitMe');
                    return false;
                }
            }
        }

        function detailOperat(obj, type) {
            FlowApplyService.detailOperat(obj).then(function (res) {
                vm.showToast(res['resultDesc']);
            }, function () {
                vm.showToast('服务器出错了');
            });
        }
    }
})();