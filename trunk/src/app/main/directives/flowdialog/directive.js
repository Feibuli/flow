/**
 * Created by Administrator on 2017/6/17.
 */
(function () {
    'use strict';
    angular
        .module('app.main')
        .controller('flowDialogController', flowDialogController)
        .directive('flowDialog', flowDialogDirective);

    function flowDialogController($mdDialog, $document, $scope, EditFlowService) {
        var vm = this;
        vm.elem = {
            name: $scope.dialogName,
            model: $scope.dialogModel,
            data: $scope.originalData,
            nameField: $scope.nameField,
            valueField: $scope.valueField,
            title: $scope.dialogTitle,
            required: $scope.required,
            isRadio: $scope.isRadio,
            placeholder: $scope.dialogPlaceholder,
            valueCompare: $scope.valueCompare,
            id: $scope.id,
            fn: $scope.fn,
            class: $scope.class
        }
        //console.log(vm.elem);
        vm.openDialog = function ($event) {
            $mdDialog.show({
                templateUrl: 'app/main/directives/flowdialog/mainDialog/form.html',
                controller: 'FlowDialogController',
                controllerAs: 'vm',
                parent: angular.element($document.body),
                clickOutsideToClose: true,
                multiple: true,
                targetEvent: $event,
                onComplete: function (scope, ele) {
                    EditFlowService.get({id: 'range', flowId: vm.elem.id}).then(function (res) {
                        var arr = [];
                        angular.forEach(res.beans, function (item) {
                            arr.push(angular.toJson(item.deptId));
                        });
                        vm.elem.model = arr;
                    });
                },
                locals: {
                    Elem: vm.elem,
                }
            }).then(function () {
                //console.log(vm.elem.model);
                //vm.elem.model = null;

            }, function () {
                //console.log(1);
                //vm.elem.model = null;

            });
        }
    }

    function flowDialogDirective($mdDialog, $document) {
        return {
            restrict: 'AE',
            controller: 'flowDialogController',
            scope: {
                dialogName: '@?dialogName',
                dialogPlaceholder: '@?dialogPlaceholder',
                dialogTitle: '@?dialogTitle',
                required: '@?dialogRequired',
                originalData: '=?data',
                dialogModel: '=?dialogModel',
                nameField: '@?nameField',
                valueField: '@?valueField',
                valueCompare: '@?valueCompare',
                isRadio: '@?isRadio',
                id: '@?dialogId',
                fn: '=?fn',
                class: '=?class'
            },
            compile: function () {
                return postLink;
            }
        };
        function postLink(scope, element, attr, ctrl) {
            /*attr.$observe('wisCommplaceConfiguration', function(value){
             ctrl.line = scope.$eval(value);
             });*/

            /*attr.$observe('class', function (value) {
                debugger
                console.log(value);
            },true)*/

            angular.element(element).click(function ($event) {
                ctrl.openDialog($event);
            });
        }
    }
})();
