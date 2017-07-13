/**
 * Created by Administrator on 2017/6/17.
 */
(function () {
    'use strict';

    angular
        .module('app.main')
        .controller('FlowDialogController', FlowDialogController);

    function FlowDialogController($mdDialog, Elem, Util, EditFlowService, $scope) {
        var vm = this;
        vm.elem = Elem;
        vm.saveEvent = saveEvent;
        vm.closeDialog = closeDialog;
        vm.response = true;

        /*$scope.$watch('vm.elem.model', function (n) {
            console.log(n);
        }, true)*/

        function saveEvent() {
            vm.response = false;
            deptFormat();
            EditFlowService.add(vm.data).then(function (res) {
                vm.response = true;
                Util.showToast(res['resultDesc']);
                closeDialog();
                typeof vm.elem.fn == "function" ? vm.elem.fn() : '';
            }, function () {
                vm.response = true;
                Util.showToast('服务器出错了');
            });
        }

        function deptFormat() {
            var arr = [];
            vm.data = {
                id: 'range',
                ranges: [],
                flowId: vm.elem.id,
                corpId: 10000
            };
            angular.forEach(vm.elem.model, function (item) {
                var obj = {};
                obj.flowId = vm.elem.id;
                obj.deptId = item;
                obj.corpId = 10000;
                arr.push(obj);
            });
            vm.data.ranges = angular.toJson(arr);
            console.log(vm.data.ranges);
        }

        function closeDialog() {
            $mdDialog.hide();
        }
    }
})();