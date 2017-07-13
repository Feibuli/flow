/**
 * Created by VPS on 2016/11/4.
 */
(function () {
    'use strict';
    angular.module('app.main')
        .controller('DialogsController', DialogsController);
    function DialogsController($mdDialog, locals) {
        var vm = this;
        locals.dialogController = vm;
        //init mdDialog
        vm.title = locals.dialogTitle;
        vm.pageData = locals.pageData;
        vm.type = locals.type;
        vm.pattern = locals.pattern;
        vm.response = true;
        vm.autoCompleteCache = undefined;
        vm.wisOperationState = false;
        vm.hideShowStatus = {
            isOpen: true
        };
        vm.closeDialog = closeDialog;
        vm.saveEvent = saveEvent;
        vm.autoCompleteCancel = autoCompleteCancel;
        vm.autoCompleteFocus = autoCompleteFocus;
        vm.lookMoreInfo = lookMoreInfo;
        vm.hideOrShow = hideOrShow;
        vm.operation = operation;
        /**
         * Open the dialog init
         */
        !function init() {
            if (locals['openFun']) {
                locals.openFun(locals);
                vm.title = locals.dialogTitle;
                vm.pageData = locals.pageData;
            }
            initHideShowStatus();
        }();
        /**
         * Save the event
         */
        function saveEvent() {
            vm.response = false;
            locals.saveFun(locals);
        }

        /**
         * Close the dialog
         */
        function closeDialog() {
            $mdDialog.cancel().then(function () {
                locals.pageData = null;
            });
        }

        /**
         *autoComplete cancel
         */
        function autoCompleteCancel(elem) {
            elem.model = null;
            elem.searchText = null;
            elem.selectedElem = null;
            vm.autoCompleteCancelState = true;
        }

        /**
         * autoCompleteFocus
         */
        function autoCompleteFocus(elem) {
            vm.autoCompleteCache = angular.copy(elem.selectedElem);
            elem.selectedElem = null;
            elem.searchText = '';
            elem.model = null;
        }

        /**
         * more info
         */
        function lookMoreInfo(elem, elems) {
            elem.isOpen = !elem.isOpen;
            var index = vm.pageData.indexOf(elems);
            vm.hideShowStatus = {
                index: index,
                isOpen: elem.isOpen
            };
            angular.element('#md-dialog-common').scrollTop(0);
        }

        /**
         * hide or show more info
         */
        function hideOrShow(index) {
            return vm.hideShowStatus.isOpen || index <= vm.hideShowStatus.index
        }

        vm.operationModel = '';
        /**
         * check hide or show more info
         */
        function initHideShowStatus() {
            angular.forEach(vm.pageData, function (data) {
                angular.forEach(data, function (temp) {
                    if (temp.type === 'WIS_BUTTON' || temp.type === '8') {
                        vm.hideShowStatus = {
                            index: vm.pageData.indexOf(data),
                            isOpen: temp.isOpen
                        };
                        return false;
                    }
                })
            });
        }

        function operation(fn, e) {
            angular.isFunction(fn) && fn(locals.pageData, e);
        }
    }
})();