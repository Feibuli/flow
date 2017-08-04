/**
 * Created by Administrator on 2017/7/13.
 */
(function () {
    'use strict';

    angular
        .module('app.flow')
        .controller('FlowApplyController', FlowApplyController);

    function FlowApplyController($scope, FlowApplyService, Util) {
        var vm = this;
        vm.approveList = [];
        vm.cancelStaff = cancelStaff;
        vm.saveEvent = saveEvent;

        // 接收原生数据
        Util.setupWebViewJavascriptBridge(function (bridge) {
            // 表单配置
            bridge.registerHandler('testJavascriptHandler', function (data, responseCallback) {
                vm.flowCfg = angular.fromJson(data);
                vm.flowCfg.formJson = angular.fromJson(vm.flowCfg.formJson);
                responseCallback(vm.flowCfg);
            });
            // 联系人
            bridge.registerHandler('testJavascriptHandlerForPes', function (data, responseCallback) {
                $scope.$apply(function () {
                    for (var i = 0; i < vm.approveList.length; i++) {
                        var obj = vm.approveList[i];
                        if (obj.uuid == data.uuid) {
                            vm.showToast('该员工已存在');
                            return;
                        }
                    }
                    vm.approveList.push(data);
                });
                window.cbk();
            });
            // 单选
            bridge.registerHandler('HandlerForSingleSelect', function (data, responseCallback) {
                $scope.$apply(function () {
                    angular.forEach(vm.flowCfg.formJson, function (item) {
                        if (item.id == data.id) {
                            item.model = data.singleValue;
                        }
                    });
                });
                window.cbk();
            });
            // 多选
            bridge.registerHandler('HandlerForMutilSelect', function (data, responseCallback) {
                $scope.$apply(function () {
                    angular.forEach(vm.flowCfg.formJson, function (item) {
                        if (item.id == data.id) {
                            item.model = data.choose.join(',');
                        }
                    });
                });
                window.cbk();
            });
            // 时间选择器
            bridge.registerHandler('testJavascriptHandlerForTime', function (data, responseCallback) {
                $scope.$apply(function () {
                    angular.forEach(vm.flowCfg.formJson, function (item) {
                        if (item.type == 'dateRange') {
                            data.sign == 'startTime' ? item.startTime = data.timer : '';
                            data.sign == 'endTime' ? item.endTime = data.timer : '';
                        } else if (item.id == data.id) {
                            item.model = data.timer;
                        }
                    })
                });
            });
            // 日期选择器
            bridge.registerHandler('HandlerForData', function (data, responseCallback) {
                $scope.$apply(function () {
                    angular.forEach(vm.flowCfg.formJson, function (item) {
                        if (item.type == 'dateRange') {
                            data.sign == 'startTime' ? item.startTime = data.timer : '';
                            data.sign == 'endTime' ? item.endTime = data.timer : '';
                        } else if (item.id == data.id) {
                            item.model = data.timer;
                        }
                    })
                });
            });
        });

        // 原生调用
        Util.setupWebViewJavascriptBridge(function (bridge) {
            vm.callNative = function (type, id, sign, options) {
                // type: 1.单选 2.时间选择器 3.联系人 4.职位 5.日期选择器 6.多选 7.消息
                var obj;
                switch (type) {
                    case 1:
                        obj = {
                            'type': '1',
                            'id': id,
                            'listArry': options.map(function (item) {
                                return item.name;
                            })
                        };
                        break;
                    case 2:
                        obj = {'type': '2', 'id': id, 'sign': sign}
                        break;
                    case 3:
                        obj = {'type': '3', 'corpId': '250'};
                        break;
                    case 4:
                        break;
                    case 5:
                        obj = {'type': '5', 'id': id, 'sign': sign}
                        break;
                    case 6:
                        obj = {
                            'type': '6',
                            'id': id,
                            'listArry': options.map(function (item) {
                                return item.name;
                            })
                        };
                        break;
                }
                bridge.callHandler('testObjcCallback', obj, function (response) {
                });
            };
            // 消息提示框
            vm.showToast = function (messge) {
                bridge.callHandler('testObjcCallback', {'type': '7', 'messge': messge}, function (response) {
                });
            };
        })

        function saveEvent() {
            if(!formValidate()) {
              return;
            }
            if(vm.approveList.length == 0) {
                vm.showToast('请选择审批人');
                return;
            }
            dataFormat();
            alert(formValidate());
            FlowApplyService.applyFlow(vm.data).then(function (res) {
                vm.showToast(res['resultDesc']);
            }, function () {
                vm.showToast('服务器出错了');
            });
        }

        function dataFormat() {
            vm.data = {
                flowCfgCode: vm.flowCfg.code, // 'flow_1166'
                corpId: 250,
                userId: 102878,
                nextAssigneeIds: '',
                formData: {},
            };
            // 表单数据处理
            angular.forEach(vm.flowCfg.formJson, function (item, index) {
                switch (item.type) {
                    case 'date':
                        item.data = item.model;
                        break;
                    case 'dateRange':
                        item.startTime = item.startTime;
                        item.endTime = item.endTime;
                        break;
                    case 'mutilSelect':
                        item.data = item.model ? item.model.join(',') : item.model;
                        break;
                    default:
                        item.data = item.model;
                        break;
                }
                if (item.id != 'start_end') {
                    vm.data.formData[item.id] = item.data;
                } else {
                    vm.data.formData['start'] = item.startTime;
                    vm.data.formData['end'] = item.endTime;
                }
            });
            vm.data.formData = angular.toJson(vm.data.formData);

            // 审批人列表处理
            var list = [];
            angular.forEach(vm.approveList, function (item) {
                list.push(item.uuid);
            });
            vm.data.nextAssigneeIds = list.join(',');

        }

        // 表单验证
        function formValidate() {
            var validList = vm.flowCfg.formJson.map(function (item) {
                if (item.required) {
                    if (item.type != 'dateRange') {
                        return {
                            title: item.input[0].placeholder,
                            type: item.type,
                            model: item.model
                        };
                    } else {
                        return {
                            title1: item.input[0].placeholder,
                            title2: item.input[1].placeholder,
                            type: item.type,
                            startTime: item.startTime,
                            endTime: item.endTime
                        };
                    }
                }
            });
            for (var i = 0; i < validList.length; i++) {
                var item = validList[i];
                if (item.type != 'dateRange') {
                    if (!item.model) {
                        vm.showToast(item.title + '不能为空')
                        return false;
                    }
                } else {
                    if (!item.startTime || !item.endTime) {
                        vm.showToast(item.title1 + '或' + item.title2 + '不能为空');
                        return false;
                    }
                }
                return true;
            }
        }

        function cancelStaff($index) {
            vm.approveList.splice($index, 1);
        }


    }

})();