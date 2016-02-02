angular.module('humet.templog', ['lbServices', 'ionic'])
    .controller('TemplogCtrl', function ($scope, User, Avatar) {
        /**
         * Blank page for testing purposes
         */
        $scope.currentUser = User.getCachedCurrent()

    });
