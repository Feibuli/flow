(function () {
    'use strict';

    angular
        .module('app.main')
        .directive('fileUpload', fileUploadDirective);

    /** @ngInject */
    function fileUploadDirective($mdDialog, $document) {
        return {
            restrict: 'A',
            compile: function (tElement) {

                return function postLink(scope, iElement) {
                    angular.element(iElement).on('click', function(){
                        $mdDialog.show({
                            controller: 'UploadController',
                            controllerAs: 'vm',
                            templateUrl: 'app/main/directives/fileupload/fileupload.html',
                            parent: angular.element($document.body),
                            // targetEvent: $event,
                            clickOutsideToClose: true,
                            locals: {
                                dialogConfig: {
                                    title: '导入数据'
                                },
                                dialogData: {
                                }
                            }
                        }).then(function () {
                            console.log(1);
                        });
                        console.log(2);
                    });
                };
            }
        };
    }
})();
