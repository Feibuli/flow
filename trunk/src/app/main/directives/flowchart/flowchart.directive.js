/**
 * Created by Administrator on 2017/6/22.
 */
(function () {
    'use strict';

    angular
        .module('app.main')
        .factory('$flowChart', FlowChartService)
        .directive('flowChart', flowChartDirective);

    function FlowChartService($mdComponentRegistry) {
        return function (handle) {
            return $mdComponentRegistry.get(handle);
        };
    }

    function flowChartDirective() {
        return {
            restrict: 'E',
            templateUrl: 'app/main/directives/flowchart/flowchart.html',
            controller: 'FlowChartController as vm',
            //template: '<div class="flow-chart"></div>',
            scope: {
                flowId: '@flowId'
            },
            replace: true,
            compile: function () {
                return function postLink(scope, elem, attr, ctrl) {
                    scope.fc = new FlowChart({
                        container: '.flow-chart',
                        height: 350,
                        scale: 1,
                        customMenu: [{
                            label: '设置节点名称',
                            click: function (data, node) {
                                ctrl.setName({
                                    name: data.name,
                                    fn: function (name) {
                                        data.name = name;
                                        node.update();
                                    }
                                });
                            }
                        }, {
                            label: '设置审批人',
                            click: function (data, node) {
                                ctrl.setApprover({
                                    assignee: data.assignee,
                                    approveType: data.approveType,
                                    assigneeType: data.assigneeType,
                                    fn: function (obj) {
                                        data.assignee = obj.assignee;
                                        data.approveType = obj.approveType;
                                        data.assigneeType = obj.assigneeType;
                                        node.update();
                                    }
                                });
                            }
                        }],
                        menu: {
                            conditionFn: function (data, line) {
                                ctrl.setCondition({
                                    conditionData: data.conditionData,
                                    fn: function (obj) {
                                        data.expressionText = obj.expressionText;
                                        data.expression = obj.expression;
                                        data.conditionData = obj.conditionData;
                                        line.update();
                                    }
                                });
                            },
                            appendMultipleNode: function (node) {
                                node.appendNode(2);
                            }
                        },
                        node: {
                            w: 120,
                            h: 116,
                            render: function (data, elem) {
                                elem.empty();
                                switch (data.type) {
                                    case 'StartNode':
                                        elem.html(data.name);
                                        break;
                                    case 'EndNode':
                                        elem.html(data.name);
                                        break;
                                    case 'AssigneeNode':
                                        if (data.name) {
                                            elem.append(data.name);
                                        }
                                        if (data.assignee) {
                                            var html = [];
                                            for (var i = 0; i < data.assignee.length; i++) {
                                                var approval = data.assignee[i].name;
                                                html.push('<li>' + approval + '</li>');
                                            }
                                            elem.append('<ul>' + html.join('') + '</ul>');
                                        }
                                        break;
                                    case 'ApplyNode':
                                        elem.html(data.name);
                                        break;
                                    case 'MutexNode':
                                        break;
                                }
                            }
                        }
                    });

                    /*$.ajax({
                     url: './app/main/directives/flowchart/init.json',
                     dataType: 'json',
                     success: function (data) {
                     scope.fc.load(data);
                     }
                     });*/
                };
            }
        }
    }

})();
