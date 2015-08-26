/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    lessOptions: {
      paths: [
        'bower_components/bootstrap/less'
      ]
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import('bower_components/jquery/dist/jquery.min.js');
  app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');
  app.import('bower_components/bootstrap/dist/css/bootstrap-theme.min.css');
  app.import('bower_components/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js');
  app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');
  app.import('bower_components/moment/min/moment.min.js');
  app.import('bower_components/spin/stylesheets/jquery.spin.css');
  app.import('bower_components/spin/javascripts/jquery.spin.js');
  app.import('bower_components/loader.js/loader.js');
  app.import('bower_components/sugar/release/sugar-full.development.js');
  app.import('bower_components/bootstrap/fonts/glyphicaons-halflings-regular.ttf', {
    destDir: 'fonts'
  });
  app.import('bower_components/bootstrap/fonts/glyphicaons-halflings-regular.svg', {
    destDir: 'fonts'
  });

  return app.toTree();

};
