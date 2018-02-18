(function() {
  function userNameModalInstanceCtrl($uibModalInstance, $cookies) {
      this.username = "";
        this.setUserName = function() {
         $cookies.put('blocChatCurrentUser', this.username);
          $uibModalInstance.close();
    };

  }

  angular
    .module('blocChat')
    .controller('userNameModalInstanceCtrl', ['$uibModalInstance', '$cookies', userNameModalInstanceCtrl]);
})();
