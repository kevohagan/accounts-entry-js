
if (typeof Handlebars !== "undefined") {
  Handlebars.registerHelper("signedInAs", function(date) {
    if (Meteor.user().username) {
      return Meteor.user().username;
    } else if (Meteor.user().profile.name) {
      return Meteor.user().profile.name;
    } else if (Meteor.user().emails && Meteor.user().emails[0]) {
      return Meteor.user().emails[0].address;
    } else {
      return "Signed In";
    }
  });
}

Handlebars.registerHelper('accountButtons', function() {
  return new Handlebars.SafeString(Template.entryAccountButtons());
});

Handlebars.registerHelper('capitalize', function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});

Handlebars.registerHelper('signupClass', function() {
  if (Accounts.oauth && Accounts.oauth.serviceNames().length > 0) {
    return "collapse";
  }
});

Handlebars.registerHelper('otherLoginServices', function() {
  return Accounts.oauth && Accounts.oauth.serviceNames().length > 0;
});

Handlebars.registerHelper('loginServices', function() {
  return Accounts.oauth.serviceNames();
});
