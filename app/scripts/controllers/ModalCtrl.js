(function () {
  function ModalCtrl($uibModalInstance, Room) {

        this.rooms = Room.all;
        this.currentRoom = null;

        this.open = function() {
          var modalInstance = $uibModal.open({
             templateUrl: '/templates/modal.html',
             controller: 'ModalCtrl',
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
        .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl]);

})();
