/**
 * Created by Administrator on 2017/6/22.
 */
(function () {
    'use strict';

    angular
        .module('app.main')
        .controller('FlowChartController', FlowChartController);

    function FlowChartController($mdDialog, $scope, $mdComponentRegistry, $attrs, $document, EditFlowService, PostTypeService) {
        var vm = this;
        vm.setName = setName;
        vm.setApprover = setApprover;
        vm.setCondition = setCondition;

        var api = {
            output: function () {
                return $scope.fc.printJSON();
            },
            order: function () {
                $scope.fc.order();
            },
            load: function (data) {
                $scope.fc.load(data);
            },
            validate: function () {
                return $scope.fc.validate();
            }
        };
        $mdComponentRegistry.register(api, $attrs.mdComponentId);


        function setName(obj) {
            var confirm = $mdDialog.prompt()
                .title('新节点名称')
                .multiple(true)
                .textContent('请输入：')
                .placeholder('节点名称')
                .ariaLabel('新建节点')
                .initialValue(obj.name)
                .ok('确认')
                .cancel('取消');
            $mdDialog.show(confirm).then(function (res) {
                obj.fn(res);
            });
        }

        function setApprover(obj) {
            EditFlowService.getUser({cropId: 10000}).then(function (user) {
                PostTypeService.query({
                    pageNo: 0,
                    pageSize: 0
                }).then(function (job) {
                    $mdDialog.show({
                        controller: 'FlowChartSetApproverController',
                        controllerAs: 'vm',
                        templateUrl: 'app/main/directives/flowchart/approver/approver.html',
                        parent: angular.element($document.body),
                        multiple: true,
                        //clickOutsideToClose: true,
                        locals: {
                            User: user.beans,
                            Job: job.data,
                            assignee: obj.assignee,
                            approveType: obj.approveType,
                            assigneeType: obj.assigneeType
                        }
                    }).then(function (res) {
                        console.log(res);
                        obj.fn(res);
                    });
                });
            });
        }

        function setCondition(obj) {
            EditFlowService.getCondition({params: 'getCondition',id: $scope.flowId}).then(function (res) {
                $mdDialog.show({
                    controller: 'FlowChartSetConditionController',
                    controllerAs: 'vm',
                    templateUrl: 'app/main/directives/flowchart/condition/condition.html',
                    parent: angular.element($document.body),
                    multiple: true,
                    //clickOutsideToClose: true,
                    locals: {
                        Condition: res.maps,
                        ConditionData: obj.conditionData,
                    }
                }).then(function (res) {
                    console.log(res);
                    obj.fn(res);
                });
            });

        }

    }
})();