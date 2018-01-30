(function() {
    function Message($firebaseArray) {
      var Message = {};
      var ref = firebase.database().ref().child("Messages");

      Message.getRoomId = function (roomId) {
        console.log(roomId);
          return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
      }

      return Message;
    }

    angular
      .module('blocChat')
      .factory('Message', ['$firebaseArray', Message]);
})();
