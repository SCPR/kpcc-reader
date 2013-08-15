Kpcc.Router.map(function() {
    this.resource('articles', { path: "/" });
    this.resource('article', { path: ":article_id" });
});


Kpcc.ArticlesRoute = Ember.Route.extend({
    model: function() {
        this.controllerFor('articles').loadMore()
        return Kpcc.Article.all();
    }
});
