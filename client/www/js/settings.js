angular.module('humet.settings', ['lbServices', 'ionic'])
    .controller('settingsCtrl', function ($scope, $location, User, Tweet) {
        $scope.currentUser = User.getCurrent();
        Tweet.count({ownerId: $scope.currentUser.id})
            .$promise
            .then(function (res) {
                $scope.currentUser.tweets = res.count;
            });

        /**
         * @name logout()
         * logout user and redirect to the login page
         */
        $scope.logout = function () {
            User.logout(function () {
                $location.path('/login');
            });
        }

    });
