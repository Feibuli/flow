(function () {
    'use strict';

    angular
        .module('app.main')
        .controller('UploadController', UploadController);

    /** @ngInject */
    function UploadController(dialogConfig, $mdDialog, $window) {

        var vm = this;

        vm.dialogConfig = dialogConfig;

        vm.templates = [{
            name: '公交站点数据模版',
            path: 'http://template.xxx.xxx'
        }];

        vm.saveEvent = saveEvent;
        vm.closeDialog = closeDialog;
        vm.download = download;

        function download() {
            if(angular.isDefined(vm.template)){
                $window.open('http://www.baidu.com', '_blank');
            }
        }

        function saveEvent() {

        }

        /**
         * Close the dialog
         */
        function closeDialog() {
            $mdDialog.cancel();
        }

    }
})();
