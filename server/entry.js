
<<<<<<< HEAD
=======
//Meteor.startup(function() {
//
//});
>>>>>>> 0b0eba82d5f5dfb50ab1f84d70c32b7b38793869

AccountsEntry = {
  settings: {},
  config: function(appConfig) {
    return this.settings = _.extend(this.settings, appConfig);
  }
};

Accounts.urls.resetPassword = function(token) {
  return Meteor.absoluteUrl('reset-password/' + token);
};

Meteor.methods({
  entryValidateSignupCode: function(signupCode) {
<<<<<<< HEAD
    console.log('entryValidateSignupCode.signupCode: ' + signupCode);
=======
    return true;
>>>>>>> 0b0eba82d5f5dfb50ab1f84d70c32b7b38793869
    return signupCode === AccountsEntry.settings.signupCode;
  },
  accountsCreateUser: function(username, email, password) {
    if (username) {
      return Accounts.createUser({
        username: username,
        email: email,
        password: password,
        profile: AccountsEntry.settings.defaultProfile || {}
      });
    } else {
      return Accounts.createUser({
        email: email,
        password: password,
        profile: AccountsEntry.settings.defaultProfile || {}
      });
    }
  }
});