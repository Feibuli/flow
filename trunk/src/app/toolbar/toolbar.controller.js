(function () {
    'use strict';

    angular
        .module('app.toolbar')
        .controller('ToolbarController', ToolbarController);

    /** @ngInject */
    function ToolbarController($rootScope, $q, $state, $timeout, $mdSidenav, $window, $cookies, LogoutUrl, Util, msNavigationService) {
        var vm = this;
        // Data
        $rootScope.global = {
            search: ''
        };
        // User
        // vm.user = User;
        vm.user = $cookies.getObject('user_info');
        vm.bodyEl = angular.element('body');
        vm.userStatusOptions = [
            {
                'title': 'Online',
                'icon': 'icon-checkbox-marked-circle',
                'color': '#4CAF50'
            },
            {
                'title': 'Away',
                'icon': 'icon-clock',
                'color': '#FFC107'
            },
            {
                'title': 'Do not Disturb',
                'icon': 'icon-minus-circle',
                'color': '#F44336'
            },
            {
                'title': 'Invisible',
                'icon': 'icon-checkbox-blank-circle-outline',
                'color': '#BDBDBD'
            },
            {
                'title': 'Offline',
                'icon': 'icon-checkbox-blank-circle-outline',
                'color': '#616161'
            }
        ];
        vm.moduleSelect = '智慧公交';
        vm.moduleChange = moduleChange;

        // Methods
        vm.toggleSidenav = toggleSidenav;
        vm.logout = logout;
        // vm.changeLanguage = changeLanguage;
        vm.setUserStatus = setUserStatus;
        vm.toggleHorizontalMobileMenu = toggleHorizontalMobileMenu;
        vm.toggleMsNavigationFolded = toggleMsNavigationFolded;
        vm.search = search;
        vm.searchResultClick = searchResultClick;
        vm.fullScreen = fullScreen;
        vm.openExamineAndApprove = openExamineAndApprove;
        vm.displayName = displayName;
        //////////

        init();

        /**
         * Initialize
         */
        function init() {
            // Select the first status as a default
            vm.userStatus = vm.userStatusOptions[0];

            // Get the selected language directly from angular-translate module setting
            // vm.selectedLanguage = vm.languages[$translate.preferredLanguage()];
        }

        /**
         * cut module
         */
        function moduleChange(module) {
            // console.log('cut');
            vm.moduleSelect = module;
        }

        /**
         * Toggle sidenav
         *
         * @param sidenavId
         */
        function toggleSidenav(sidenavId) {
            $mdSidenav(sidenavId).toggle();
        }

        /**
         * Sets User Status
         * @param status
         */
        function setUserStatus(status) {
            vm.userStatus = status;
        }

        /**
         * Logout Function
         */
        function logout() {
            // userApi.logout();
            $window.location.href = LogoutUrl;
            $cookies.remove('user_info');
            // Util.localStorage.removeItem('user');
        }

        /**
         * Toggle horizontal mobile menu
         */
        function toggleHorizontalMobileMenu() {
            vm.bodyEl.toggleClass('ms-navigation-horizontal-mobile-menu-active');
        }

        /**
         * Toggle msNavigation folded
         */
        function toggleMsNavigationFolded() {
            msNavigationService.toggleFolded();
        }

        /**
         * Search action
         *
         * @param query
         * @returns {Promise}
         */
        function search(query) {
            var navigation = [],
                flatNavigation = msNavigationService.getFlatNavigation(),
                deferred = $q.defer();

            // Iterate through the navigation array and
            // make sure it doesn't have any groups or
            // none ui-sref items
            for (var x = 0; x < flatNavigation.length; x++) {
                if (flatNavigation[x].uisref) {
                    navigation.push(flatNavigation[x]);
                }
            }

            // If there is a query, filter the navigation;
            // otherwise we will return the entire navigation
            // list. Not exactly a good thing to do but it's
            // for demo purposes.
            if (query) {
                navigation = navigation.filter(function (item) {
                    if (angular.lowercase(item.title).search(angular.lowercase(query)) > -1) {
                        return true;
                    }
                });
            }

            // Fake service delay
            $timeout(function () {
                deferred.resolve(navigation);
            }, 1000);

            return deferred.promise;
        }

        /**
         * Search result click action
         *
         * @param item
         */
        function searchResultClick(item) {
            // If item has a link
            if (item.uisref) {
                // If there are state params,
                // use them...
                if (item.stateParams) {
                    $state.go(item.state, item.stateParams);
                }
                else {
                    $state.go(item.state);
                }
            }
        }

        /**
         *  fullScreen
         */
        function fullScreen() {
            var state = judgeFullScreen();
            if (state) {
                cancelFullScreen();
            } else {
                viewFullScreen();
            }
        }

        /**
         * view full screen
         */
        function viewFullScreen() {
            var docElm = document.documentElement;
            if (docElm.requestFullscreen) {
                docElm.requestFullscreen();
            }
            else if (docElm.msRequestFullscreen) {
                docElm.msRequestFullscreen();
            }
            else if (docElm.mozRequestFullScreen) {
                docElm.mozRequestFullScreen();
            }
            else if (docElm.webkitRequestFullScreen) {
                docElm.webkitRequestFullScreen();
            }
        }

        /**
         * cancel full screen
         */
        function cancelFullScreen() {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
            else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }

        /**
         * judge full screen state
         */
        function judgeFullScreen() {
            return Util.judgeFullScreen();
        }

        /**
         * open examine and approve
         */
        function openExamineAndApprove() {
            $rootScope.$broadcast('$wisOpenExamineAndApprove');
        }

        /**
         * display user name
         */
        function displayName() {
            return vm.user ? vm.user.loginName.replace(/(.{3}).*(.{4})/, "$1****$2") : '';
        }
    }

})();

