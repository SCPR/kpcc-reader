Kpcc.ArticleController = Ember.ObjectController.extend({
    needs: ['articles'],

    nextArticle: function() {
        var article = this.shiftArticles(1);
        this.transitionToRoute('article', article)
    },

    previousArticle: function() {
        var article = this.shiftArticles(-1);
        this.transitionToRoute('article', article)
    },

    shiftArticles: function(delta) {
        var articles, index;

        articles = this.get('articles');
        index    = articles.indexOf(this.get('content')) + delta;

        if(index >= 0 && index <= articles.get('length') - 1) {
            return articles.objectAt(index)
        } else {
            return null;
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
