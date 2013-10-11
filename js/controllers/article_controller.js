Kpcc.ArticleController = Ember.ObjectController.extend({
    needs: ['articles'],

    nextArticle: function() {
        return this.shiftArticles(1)
    }.property('content'),

    previousArticle: function() {
        return this.shiftArticles(-1)
    }.property('content'),

    shiftArticles: function(delta) {
        var articles, index;

        articles = controller.get('articles');
        index    = articles.indexOf(this.get('content')) + delta;
        console.log(articles, index, articles.indexOf(this.get('content')))
        if(index >= 0 && index <= articles.get('length') - 1) {
            return articles.objectAt(index)
        } else {
            return {};
        }
    },


    imgWrapperStyle: function() {
        var assets, url;

        assets = this.get('assets');
        if(!assets.get('length')) return '';

        url = assets.get('firstObject.small.url');
        return "background:url("+url+") no-repeat;background-size:cover;";
    }.property('assets.@each')
})
