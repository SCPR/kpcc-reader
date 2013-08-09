Kpcc.Router.map(function() {
    this.resource('articles', { path: "/" });
    this.resource('article', { path: ":article_id" });
});


Kpcc.ArticlesRoute = Ember.Route.extend({
    model: function() {
        Kpcc.Article.find({
            limit : 10,
            types : "news,blogs"
        });

        return Kpcc.Article.all();
    }
});
