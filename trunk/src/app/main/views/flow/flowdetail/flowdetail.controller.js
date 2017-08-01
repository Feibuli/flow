/**
 * Created by Administrator on 2017/7/13.
 */
(function () {
    'use strict';

    angular
        .module('app.flow')
        .controller('FlowDetailController', FlowDetailController);

    function FlowDetailController(Util) {
        var vm = this;

        // 接收原生数据
        Util.setupWebViewJavascriptBridge(function (bridge) {

            // 表单配置
            bridge.registerHandler('testJavascriptHandler', function (data, responseCallback) {
                alert(angular.toJson(data))
                vm.flowCfg = angular.fromJson(data);
                vm.flowCfg.formJson = angular.fromJson(vm.flowCfg.formJson);
                window.cbk();
            });

        });

        // 原生调用
        Util.setupWebViewJavascriptBridge(function (bridge) {
            vm.callNative = function () {

            };

        })
    }
})();