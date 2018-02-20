(function() {
  function userNameModalInstanceCtrl($uibModalInstance, $cookies, $scope) {
      $scope.username = "";
        this.setUserName = function() {
         $cookies.put('blocChatCurrentUser', $scope.username);
          $uibModalInstance.close();
    };

  }

  angular
    .module('blocChat')
    .controller('userNameModalInstanceCtrl', ['$uibModalInstance', '$cookies', '$scope', userNameModalInstanceCtrl]);
})();
