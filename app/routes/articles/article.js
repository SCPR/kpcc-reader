import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    this.controllerFor('articles').loadMore();

    return controller.setProperties({
      model       : model,
      articles    : this.store.all('article')
    });
  },

  model: function(params) {
    debugger
    return this.store.find("article", params.article_id);
  }
});
