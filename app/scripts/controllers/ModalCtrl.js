(function () {
  function ModalCtrl($uibModal, Room) {

        this.rooms = Room.all;
        this.currentRoom = null;

        this.open = function() {
          var modalInstance = $uibModal.open({
             templateUrl: '/templates/modal.html',
             controller: 'ModalInstanceCtrl',
             controllerAs: 'modal'

          });

          modalInstance.result.then(function(name) {
              Room.add(name);

          }, function() {

          });

        };


   };

      angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl]);

})();
