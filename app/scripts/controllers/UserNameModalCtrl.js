(function() {
  function userNameModalInstanceCtrl($uibModalInstance, $cookies, $scope) {
     $scope.username = "";
      $scope.setUserName = function() {
      $cookies.put('blocChatCurrentUser', $scope.username);
        $uibModalInstance.close();
        //window.location.reload();


    };

}

  angular
    .module('blocChat')
    .controller('userNameModalInstanceCtrl', ['$scope', '$uibModalInstance', '$cookies', userNameModalInstanceCtrl]);
})();

//console.log($scope.username);
//$cookies.put('blocChatCurrentUser', $scope.username);
