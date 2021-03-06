(function() {
   function Room($firebaseArray) {
     var Room = {};

     /** references FireBase DB;child calls children of "rooms" (room1,room2,room3)*/
     var ref = firebase.database().ref().child("Rooms");
     /**returns the data as an array*/
     var rooms = $firebaseArray(ref);

     Room.add = function(name) {
        rooms.$add(name);

      };
      Room.all = rooms;

      return Room;

   }

   angular
      .module('blocChat')
      .factory('Room', ['$firebaseArray', Room]);
})();
