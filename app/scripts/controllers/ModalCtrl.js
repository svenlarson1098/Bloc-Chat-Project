(function () {
  function ModalCtrl($uibModal, Room, $scope) {

      $scope.rooms = Room.all;
       this.currentRoom = null;

        this.open = function() {
          var modalInstance = $uibModal.open({
             templateUrl: '/templates/modal.html',
             controller: 'ModalInstanceCtrl',
             controllerAs: 'modal'

          });

          modalInstance.result.then(function(room) {
              Room.add(room);

          }, function() {

          });

        };
   }

      angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', 'Room','$scope', ModalCtrl]);

})();
