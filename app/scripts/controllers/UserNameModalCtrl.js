(function() {
  function userNameModalInstanceCtrl($uibModalInstance, $cookies, $scope) {
     $scope.username = "";
      this.setUserName = function() {
        console.log($scope.username);
        $cookies.put('blocChatCurrentUser', $scope.username);
        $uibModalInstance.close();
        window.location.reload();

    };

}

  angular
    .module('blocChat')
    .controller('userNameModalInstanceCtrl', ['$uibModalInstance', '$cookies','$scope', userNameModalInstanceCtrl]);
})();
