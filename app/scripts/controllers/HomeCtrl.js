(function() {
    function HomeCtrl(Room, $uibModal) {
      var $ctrl = this;

      $ctrl.rooms = Room.all;

      $ctrl.cuurentRoom = null;

      $ctrl.open = function() {
          $uibModal.open({
            templateUrl: '/templates/modal.html',
            controller: 'ModalCtrl as modal'
      });


      /**this.rooms = Room.all;*/
    };
};
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
