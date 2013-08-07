Kpcc.Router.map(function() {
    this.resource('articles', { path: "/" });
    this.resource('article', { path: ":article_id" });
});


Kpcc.ArticlesRoute = Ember.Route.extend({
    model: function(){
        return Kpcc.Article.find({ types: "news,blogs" });
    }
});
