(function() {
    function  ModalInstanceCtrl($uibModalInstance, Room) {
        this.newRoom = "";

        this.addRoom = function() {
          Room.addRoom(this.newRoom);
          $uibModalInstance.close();
      };
        this.cancel = function() {
          $uibModalInstance.dismiss('cancel');
      };
};

    angular
      .module('blocChat')
      .controller('ModalInstanceCtrl', ['$uibModalInstance', 'Room', ModalInstanceCtrl]);

})();
