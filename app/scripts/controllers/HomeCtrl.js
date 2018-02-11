(function() {
    function HomeCtrl($scope, Room, $cookies, $uibModal, Message) {

        $scope.rooms = Room.all;
          $scope.currentRoom = null;
            $scope.messages = {};
              $scope.currentUser = $cookies.get('blocChatCurrentUser');


      $scope.addRoom = function() {
          $uibModal.open({
              templateUrl: '/templates/modal.html',
              size: 'sm',
              controllerAs: 'ModalCtrl as modal'
          });
      };

      $scope.setCurrentRoom = function(room) {
          $scope.currentRoom = room;
            $scope.messages = Message.getRoomId(currentRoom.$id);
          };
              $scope.send = Message.send;


      this.sendMessage = function(message) {
          message.username = $cookies.get('blocChatCurrentUser');
            message.roomId = currentRoom.$id;
              message.send(message);
              console.log(message);
      };

  }
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room', '$cookies', '$uibModal', 'Message', HomeCtrl]);
})();
