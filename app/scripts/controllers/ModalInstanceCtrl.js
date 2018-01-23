(function() {
    function  ModalInstanceCtrl($uibModalInstance) {
        this.newRoom = "";

        this.addRoom = function() {
          console.log("addRoom?")
           $uibModalInstance.close(this.newRoom);
      };
        this.cancel = function() {
          $uibModalInstance.dismiss('cancel');
      };
};

    angular
      .module('blocChat')
      .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);

})();
