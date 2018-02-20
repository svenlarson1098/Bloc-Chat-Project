(function() {
    function  ModalInstanceCtrl($uibModalInstance) {
        this.newRoom = "";

        this.addRoom = function() {
           $uibModalInstance.close(this.newRoom);
           console.log(close);
      };

        this.cancel = function() {
          $uibModalInstance.dismiss('cancel');
            console.log("addRoom?");
      };

}

    angular
      .module('blocChat')
      .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);

})();
