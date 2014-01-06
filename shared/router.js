
Router.map(function() {
<<<<<<< HEAD
  this.route("entrySignInPage", {
=======
  this.route("entrySignIn", {
>>>>>>> 0b0eba82d5f5dfb50ab1f84d70c32b7b38793869
    path: "/sign-in",
    before: function() {
      Session.set('entryError', void 0);
      return Session.set('buttonText', 'in');
    }
  });
<<<<<<< HEAD
  this.route("entrySignUpPage", {
=======
  this.route("entrySignUp", {
>>>>>>> 0b0eba82d5f5dfb50ab1f84d70c32b7b38793869
    path: "/sign-up",
    before: function() {
      Session.set('entryError', void 0);
      return Session.set('buttonText', 'up');
    }
  });
  this.route("entryForgotPassword", {
    path: "/forgot-password",
    before: function() {
      return Session.set('entryError', void 0);
    }
  });
  this.route('entrySignOut', {
    path: '/sign-out',
    before: function() {
      Session.set('entryError', void 0);
      if (AccountsEntry.settings.homeRoute) {
        Meteor.logout();
        Router.go(AccountsEntry.settings.homeRoute);
      }
      return this.stop();
    }
  });
  this.route('entryResetPassword', {
    path: 'reset-password/:resetToken',
    before: function() {
      Session.set('entryError', void 0);
      return Session.set('resetToken', this.params.resetToken);
    }
  });
});
