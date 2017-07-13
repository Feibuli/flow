(function () {
    'use strict';

    /**
     * Main module of the Fuse
     */
    angular
        .module('fuse', [

            // Common 3rd Party Dependencies
            'textAngular',
            'xeditable',
            'ui.tree',
            'ng-sortable',
            // Core
            'app.core',

            // Navigation
            // 'app.navigation',

            // Toolbar
            // 'app.toolbar',

            // Main View
            'app.main'
        ]);
})();
