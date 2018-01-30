(function() {
    function HomeCtrl(Room, Message, $uibModal) {

      this.rooms = Room.all;
      this.currentRoom = null;

      this.addRoom = function() {
          $uibModal.open({
              templateUrl: '/templates/modal.html',
              size: 'sm',
              controllerAs: 'ModalCtrl as modal'
          });
      }
      this.setCurrentRoom = function(room) {
          this.currentRoom = room;
          this.messages = Message.getRoomId(this.currentRoom.$id);
          console.log(this.messages)
      }
  };

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();
