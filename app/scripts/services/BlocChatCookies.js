(function() {
  function BlocChatCookies($cookies, $uibModal) {
    /**
    *@desc sets current user varible to whatever is stored in cookies
    *@type {Object}
    */
    var currentUser = $cookies.get('blocChatCurrentUser');

/** @desc nothing stored in cookies, the opens username input modal requireBase
* user to create a username; gets stored in BlocChatCookies
*@type {Object}
*/
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        templateUrl: '/templates/username.html',
        controller: 'userNameModalInstanceCtrl as username',
        animation: true,
        controllerAs: 'userNameModal',
        size: 'sm',
        keyboard: false
      });
    }
  }
  angular
    .module('blocChat')
    .run(['$cookies','$uibModal', BlocChatCookies]);
})();
