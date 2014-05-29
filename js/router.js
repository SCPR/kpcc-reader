Kpcc.Router.map(function() {
    this.resource('articles', { path: "/" })
    this.resource('article', { path: ":article_id" })
})


Kpcc.ArticleRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        this.controllerFor('articles').loadMore()

        return controller.setProperties({
            model       : model,
            articles    : this.store.all('article')
        })
    },

    model: function(params) {
        return this.store.find("article", params.article_id);
    }
})


Kpcc.ArticlesRoute = Ember.Route.extend({
    model: function() {
        this.controllerFor('articles').loadMore()
        return this.store.all("article")
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
