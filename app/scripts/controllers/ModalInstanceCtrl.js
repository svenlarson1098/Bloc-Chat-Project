(function() {
    function  ModalInstanceCtrl($scope, $uibModalInstance) {
        $scope.newRoom = "";

        $scope.addRoom = function() {
           $uibModalInstance.close($scope.newRoom);
      };
console.log(close);

        $scope.cancel = function() {

          $uibModalInstance.dismiss('cancel');

      };
      console.log("addRoom?");
}

    angular
      .module('blocChat')
      .controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', ModalInstanceCtrl]);

})();
