(function() {
    function HomeCtrl(Room, $cookies, $uibModal, Message) {

        this.rooms = Room.all;
          this.currentRoom = null;
            this.messages = {};
              this.currentUser = $cookies.get('blocChatCurrentUser');


      this.addRoom = function() {
          $uibModal.open({
              templateUrl: '/templates/modal.html',
              size: 'sm',
              controllerAs: 'ModalCtrl as modal'
          });
      };

      this.setCurrentRoom = function(room) {
          this.currentRoom = room;
            this.messages = Message.getRoomId(this.currentRoom.$id);
            console.log(this.messages);
          };

      this.sendMessage = function(message) {
          message.username = $cookies.get('blocChatCurrentUser');
            message.roomId = this.currentRoom.$id;
              Message.send(message);
              console.log(message);
      };

    }
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$cookies', '$uibModal', 'Message', HomeCtrl]);
})();
