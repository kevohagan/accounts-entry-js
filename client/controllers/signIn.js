
Template.entrySignIn.helpers({
  emailInputType: function() {
    if (Accounts.ui._options.passwordSignupFields === 'EMAIL_ONLY') {
      return 'email';
    } else {
      return 'string';
    }
  },
  emailPlaceholder: function() {
    var fields;
    fields = Accounts.ui._options.passwordSignupFields;
    if (_.contains(['USERNAME_AND_EMAIL', 'USERNAME_AND_OPTIONAL_EMAIL'], fields)) {
      return 'Username or email';
    }
    return 'Email';
  },
  logo: function() {
    return AccountsEntry.settings.logo;
  }
});

Template.entrySignIn.events({
  'submit #signIn': function(event) {
    event.preventDefault();
    Session.set('email', $('input[name="email"]').val());
    Session.set('password', $('input[name="password"]').val());
    return Meteor.loginWithPassword(Session.get('email'), Session.get('password'), function(error) {
      if (error) {
        return Session.set('entryError', error.reason);
      } else {
        return Router.go(AccountsEntry.settings.dashboardRoute);
      }
    });
  }
});
