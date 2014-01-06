# accounts-entry

A meteorite package that relies on Iron Router and gives you sign page login styles.

We wanted something to work with that used [Iron
Router](https://github.com/EventedMind/iron-router), [Bootstrap
3](https://github.com/mangasocial/meteor-bootstrap-3), and didn't require the forcing of the dropdown box that didn't seem to be easily styled. But we love the ease of adding more packages like accounts-f
acebook or accounts-twitter, so we fully support the oauth packages by adding buttons to let people sign-up/sign-in with those services if you add them.  Right now it also assumes you will be using accoun
ts-password, but we will likely make that optional in the future.

See more in our [documentation](http://github.differential.io/accounts-entry/)




### Client Config
````js
Meteor.startup(function() {
  Accounts.ui.config({
    passwordSignupFields: 'EMAIL_ONLY'
  });
  return AccountsEntry.config({
    logo: 'logo.png',
    privacyUrl: '/privacy-policy',
    termsUrl: '/terms-of-use',
    homeRoute: '/',
    dashboardRoute: '/dashboard',
    profileRoute: 'profile',
    showSignupCode: true
  });
});
````

#### passwordSignupField Options
````js
  EMAIL_ONLY
  USERNAME_AND_EMAIL
  USERNAME_AND_OPTIONAL_EMAIL
  USERNAME_ONLY
````

### Server Config
````js
Meteor.startup(function() {
  return AccountsEntry.config({
    signupCode: 's3cr3t',
    defaultProfile: {
      someDefault: 'default'
    }
  });
});
````