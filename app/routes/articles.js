import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    this.controllerFor('articles/index').loadMore();
    return this.store.all("article");
  },

  activate: function() {
    this.start(this.controllerFor('articles/index'), 60);
    this._super.apply(this, arguments);
  },

  deactivate: function() {
    this.stop();
    this._super.apply(this, arguments);
  },

  checkForNewContent: true,

  start: function(controller, seconds) {
    this.checkForNewContent = true;
    this.getNewArticles(seconds);
  },

  getNewArticles: function(seconds){
    var _this = this;
    Ember.run.later(function(){
      if(_this.checkForNewContent){
        _this.query.bind(this);
        _this.getNewArticles(seconds);
      }
    }, 1000);
  },

  stop: function() {
    this.checkForNewContent = false;
  },

  query: function() {
    this.controllerFor('articles/index').checkForNewRecords();
  }  

});
