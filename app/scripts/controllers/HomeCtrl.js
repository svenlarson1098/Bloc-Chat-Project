(function() {
    function HomeCtrl(Room, $cookies, $uibModal, Message) {

        this.rooms = Room.all;
          this.currentRoom = null;
              this.messages = {};
              this.currentUser = $cookies.get('blocChatCurrentUser');

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
              message.content = "";
              message = {};
        };

    }
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$cookies', '$uibModal', 'Message', HomeCtrl]);
})();
