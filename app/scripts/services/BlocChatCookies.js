(function() {
  function BlocChatCookies($cookies, $uibModal) {
    /**
    *@desc sets current user varible to whatever is stored in cookies
    *@type {Object}
    */

    //$cookies.remove('blocChatCurrentUser');
    var currentUser = $cookies.get('blocChatCurrentUser');

/** @desc nothing stored in cookies, the opens username input modal requireBase
* user to create a username; gets stored in BlocChatCookies
*@type {Object}
*/        if (!currentUser || currentUser === '') {
          $uibModal.open({
            templateUrl: '/templates/username.html',
              controller: 'userNameModalInstanceCtrl',
                animation: true,
                  controllerAs: 'usernameX',
                  size: 'sm',
                  keyboard: false,
                  backdrop: 'static'
        });
      }
     }

    angular
    .module('blocChat')
    .run(['$cookies','$uibModal', BlocChatCookies]);
})();
