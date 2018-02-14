(function() {
    function Message($firebaseArray, $cookies) {
      var Message = {};
      var ref = firebase.database().ref().child("Messages");
      var messages = $firebaseArray(ref);

      Message.getRoomId = function (roomId) {
         return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
      };

       Message.send = function(newMessage) {
         console.log(newMessage.roomId);
          messages.$add({
              username: newMessage.username,
              content: newMessage.content,
              timeSent: Date.now(),
              roomId: newMessage.roomId
            });

          };

        return Message;

  }

    angular
      .module('blocChat')
      .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
