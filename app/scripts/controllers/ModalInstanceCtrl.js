(function() {
    function  ModalInstanceCtrl($scope, $uibModalInstance) {
        $scope.newRoom = "";

        $scope.addRoom = function() {
          console.log("addRoom?")
           $uibModalInstance.close($scope.newRoom);
      };
        $scope.cancel = function() {
          $uibModalInstance.dismiss('cancel');
      };
};

    angular
      .module('blocChat')
      .controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', ModalInstanceCtrl]);

})();
