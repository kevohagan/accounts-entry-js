

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
    console.log('entryValidateSignupCode.signupCode: ' + signupCode);
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