angular.module('humet.dev', ['lbServices', 'ionic'])
    .controller('DevCtrl', function ($scope, User, Avatar) {
        /**
         * Blank page for testing purposes
         */
        $scope.currentUser = User.getCachedCurrent()

    });
