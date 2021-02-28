(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);


SignUpController.$inject = ["LoginServices"];

function SignUpController(LoginServices) {
var signupctrl = this;
signupctrl.savedetails = function() {

  signupctrl.result = LoginServices.SaveSignupdetails(signupctrl.username,signupctrl.lastname,signupctrl.email,signupctrl.phoneno,signupctrl.favdish);

}


}



})();
