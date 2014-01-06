Package.describe({
    summary: "Make signin and signout their own pages with routes."
});

Package.on_use(function(api) {

  // CLIENT
  api.use([
    'deps',
    'service-configuration',
    'accounts-base',
    'underscore',
    'templating',
    'handlebars',
    'spark',
    'session',
    'less']
  , 'client');


  api.add_files([
    'client/entry.less',

    'client/models/entrySignUpPage.html',
    'client/models/forgotPassword.html',
    'client/models/resetPassword.html',
    'client/models/entrySocial.html',
    'client/models/entryError.html',
    'client/models/accountButtons.html',

    'client/entry.js',
    'client/helpers.js',
    'client/controllers/entrySignUpPage.js',
    'client/controllers/forgotPassword.js',
    'client/controllers/resetPassword.js',
    'client/controllers/entrySocial.js',
    'client/controllers/entryError.js',
    'client/controllers/accountButtons.js',

    'client/views/entrySignInPage.less',
    'client/views/entrySignUpPage.less',
    'client/views/forgotPassword.less',
    'client/views/resetPassword.less',
    'client/views/entrySocial.less',
    'client/views/entryError.less',
    'client/views/accountButtons.less'

  ], 'client');

  // SERVER
  api.use([
    'deps',
    'service-configuration',
    'accounts-password',
    'accounts-base',
    'underscore',
    'coffeescript'
  ], 'server');

  api.add_files(['server/entry.js'], 'server');

  // CLIENT and SERVER
  api.imply('accounts-base', ['client', 'server']);
  api.export('AccountsEntry', ['client', 'server']);
  api.use('iron-router', ['client', 'server']);
  api.add_files(['shared/router.js'], ['client', 'server']);

});
