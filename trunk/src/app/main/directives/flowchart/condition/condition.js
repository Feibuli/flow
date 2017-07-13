/**
 * Created by Administrator on 2017/6/26.
 */
(function () {
    'use strict;'

    angular
        .module('app.main')
        .controller('FlowChartSetConditionController', FlowChartSetConditionController);

    function FlowChartSetConditionController(Condition, $mdDialog, $scope, ConditionData) {
        var vm = this;
        vm.closeDialog = closeDialog;
        vm.saveEvent = saveEvent;
        vm.clear = clear;
        vm.add = add;
        vm.del = del;
        vm.conditions = ConditionData || [];
        vm.firstInput = Condition.map(function (item) {
            return {
                name: item.input[0].placeholder,
                type: item.type,
                option: item.options,
                id: item.id
            }
        });

        !ConditionData && vm.conditions.push([{firstInput: vm.firstInput}]);

        vm.operateMultiple =
            [{
                name: '等于',
                value: '=='
            }, {
                name: '不等于',
                value: '!='
            }, {
                name: '小于',
                value: '<'
            }, {
                name: '小于等于',
                value: '<='
            }, {
                name: '大于',
                value: '>'
            }, {
                name: '大于等于',
                value: '>='
            }];

        vm.operate =
            [{
                name: '等于',
                value: '=='
            }, {
                name: '不等于',
                value: '!='
            }];

        function add() {
            vm.conditions.push([{firstInput: vm.firstInput}]);
        }

        function del($index) {
            vm.conditions.splice($index, 1);
        }

        function clear($index) {
            var arr = vm.conditions[$index];
            arr[1] ? arr[1].secondValue = null : '';
            arr[2] ? arr[2].thirdValue = null : '';
        }

        function saveEvent() {
            var arr = vm.conditions.map(function (item) {
                return {
                    expression: item[0].firstValue.id + item[1].secondValue.value + (item[2].thirdValue.name ? angular.toJson(item[2].thirdValue.name) : item[2].thirdValue),
                    expressionText: item[0].firstValue.name + item[1].secondValue.name + (item[2].thirdValue.name || item[2].thirdValue),
                    conditionData: [item[0].firstValue, item[1].secondValue, item[2].thirdValue]
                }
            });
            var obj = {
                expression: [],
                expressionText: [],
                conditionData: vm.conditions
            };
            angular.forEach(arr, function (item, index) {
                obj.expression.push(item.expression);
                if (index == 0) {
                    obj.expressionText.push({
                        label: item.expressionText
                    });
                } else {
                    obj.expressionText.push({
                        operate: 'and',
                        label: item.expressionText
                    });
                }
            });
            obj.expression = obj.expression.join('&&');
            console.log(vm.conditions);
            console.log(obj);
            $mdDialog.hide(obj);
        }

        function closeDialog() {
            $mdDialog.cancel()
        }
    }
})();