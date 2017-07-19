/**
 * Created by Administrator on 2017/7/13.
 */
(function () {
    'use strict';

    angular
        .module('app.flow')
        .controller('FlowApplyController', FlowApplyController);

    function FlowApplyController(Util, $scope) {
        var vm = this;
        vm.click = click;
        vm.approveList = [];
        // vm.singleSelectList = null;


        //与OC交互的所有JS方法都要放在此处注册，才能调用通过JS调用OC或者让OC调用这里的JS
        function setupWebViewJavascriptBridge(callback) {
            if (window.WebViewJavascriptBridge) {
                return callback(WebViewJavascriptBridge);
            }
            if (window.WVJBCallbacks) {
                return window.WVJBCallbacks.push(callback);
            }
            window.WVJBCallbacks = [callback];
            var WVJBIframe = document.createElement('iframe');
            WVJBIframe.style.display = 'none';
            WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
            document.documentElement.appendChild(WVJBIframe);
            setTimeout(function () {
                document.documentElement.removeChild(WVJBIframe)
            }, 0)
        }

        setupWebViewJavascriptBridge(function (bridge) {
            // 表单配置
            bridge.registerHandler('testJavascriptHandler', function (data, responseCallback) {
                vm.flowCfg = data;
                vm.flowCfg.formJson = angular.fromJson(vm.flowCfg.formJson);
                window.cbk();
            });
            // 联系人
            bridge.registerHandler('testJavascriptHandlerForPes', function (data, responseCallback) {
                $scope.$apply(function () {
                    vm.approveList.push(data);
                });
                window.cbk();
            });
            // 单选
            bridge.registerHandler('HandlerForSingleSelect', function (data, responseCallback) {
                $scope.$apply(function () {
                    angular.forEach(vm.flowCfg.formJson, function (item) {
                        if (item.type == 'singleSelect') {
                            item.model = data.singleValue;
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
                            data.sign == 'startTime' ? item.startTime = data.timer : item.endTime = data.timer;
                        }
                    })
                });
            });
            // 原生调用
            vm.callNative = function (type, sign, options) {
                // type: 1.单选 2.时间选择器 3.联系人 4.职位
                var obj = {};
                switch (type) {
                    case 1:
                        var options = options.map(function (item) {
                            return item.name;
                        });
                        obj = {'listArry': options, 'type': '1'};
                        break;
                    case 2:
                        obj = {'type': '2', 'sign': sign}
                        break;
                    case 3:
                        obj = {'corpId': '10000', 'type': '3'};
                        break;
                    case 4:
                        break;
                }
                bridge.callHandler('testObjcCallback', obj, function (response) {
                });
            }

        });


        function click() {
            //alert(angular.fromJson({"data":"qw","handlerName":"testJavascriptHandler"}).data);
            console.log(vm.data);
            Util.showToast('12345')
        }


    }

})();