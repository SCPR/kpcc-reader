Kpcc.ArticlesController = Ember.ArrayController.extend({
    currentPage     : 0,
    limit           : 12,
    types           : "news,blogs",

    loadMore: function() {
        if(this.get('isLoading')) return;

        this.incrementProperty('currentPage');
        this.set('isLoading', true);

        var self = this;

        Kpcc.Article.find({
            page    : this.get('currentPage'),
            limit   : this.get('limit'),
            types   : this.get('types')

        }).then(function(){
            self.set('isLoading', false)
        });
    },
});
