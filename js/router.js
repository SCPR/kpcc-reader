Kpcc.Router.map(function() {
    this.resource('articles', { path: "/" })
    this.resource('article', { path: ":article_id" })
})


Kpcc.ArticleRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        this.controllerFor('articles').loadMore()

        return controller.setProperties({
            model       : model,
            articles    : Kpcc.Article.all()
        })
    },

    model: function(params) {
        return Kpcc.Article.find(params.article_id);
    }
})


Kpcc.ArticlesRoute = Ember.Route.extend({
    model: function() {
        this.controllerFor('articles').loadMore()
        return Kpcc.Article.all()
    },

    activate: function() {
        Kpcc.AutoRefresh.start(this.controllerFor('articles'), 60)
        this._super.apply(this, arguments)
    },

    deactivate: function() {
        Kpcc.AutoRefresh.stop()
        this._super.apply(this, arguments)
    }
})
