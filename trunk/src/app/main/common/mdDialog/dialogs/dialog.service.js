/**
 * Created by VPS on 2016/12/7.
 */
(function () {
    'use strict';
    angular
        .module('app.main')
        .factory('$wisDialog', wisDialogService);
    function wisDialogService($mdDialog, $document) {
        //mdDialog弹出框功能模块
        function showDialog($event, title, pageData, elem, type, openFun, saveFun, vm, templateUrl) {
            var elemData = [],
                realType = '',
                pattern = 'default',
                url = !!templateUrl ? templateUrl : 'app/main/common/mdDialog/dialogs/dialogs.html';
            angular.copy(pageData, elemData);
            if (type.indexOf('add') !== -1) {
                realType = 'add';
            } else if (type.indexOf('edit') !== -1) {
                realType = 'edit';
            } else if (type.indexOf('tabs') !== -1) {
                realType = 'tabs';
            }
            if (type.indexOf('@') !== -1) {
                var tempVar = type.split('@')[1];
                tempVar !== '' && (pattern = tempVar);
            }
            $mdDialog.show({
                controller: 'DialogsController',
                controllerAs: 'vm',
                multiple: true,
                templateUrl: url,
                parent: angular.element($document.body),
                // targetEvent: $event,
                clickOutsideToClose: true,
                locals: {
                    dialogTitle: title,
                    pageData: elemData,
                    openFun: openFun,
                    saveFun: saveFun,
                    type: realType,
                    pattern: pattern,
                    elem: elem,
                    viewModel: vm
                }
            }).then(function (response) {
            });
        }

        //创建弹出框
        function createShowDialog(vm, title, type, pageData, openFun, saveFun, templateUrl) {
            if (type.indexOf('@') !== -1) {
                vm[type.split('@')[0]] = function ($event, elem) {
                    showDialog($event, title, pageData, elem, type, openFun, saveFun, vm, templateUrl);
                };
            } else {
                vm[type] = function ($event, elem) {
                    showDialog($event, title, pageData, elem, type, openFun, saveFun, vm, templateUrl);
                };
            }
        }

        //hide弹窗
        function hide(res) {
            $mdDialog.hide(res);
        }

        return {
            createShowDialog: createShowDialog,
            hide: hide
        }
    }
})();