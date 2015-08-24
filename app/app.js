import Ember from 'ember';
import DS from 'ember-data';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

App.ApplicationAdapter = DS.RESTAdapter;

DS.RESTAdapter.reopen({
    host        : "http://www.scpr.org",
    namespace   : "api/v3"
});

import moment from 'moment';

loadInitializers(App, config.modulePrefix);

export default App;
