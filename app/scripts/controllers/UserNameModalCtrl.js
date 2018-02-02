(function() {
  function userNameModalInstanceCtrl($uibModalInstance, $cookies) {

      this.setUserName = function(username) {
        $cookies.put('blocChatCurrentUser', this.username)
        $uibModalInstance.close();
        console.log(this.username);
      }
  };

  angular
    .module('blocChat')
    .controller('userNameModalInstanceCtrl', ['$uibModalInstance', '$cookies', userNameModalInstanceCtrl]);
})();
