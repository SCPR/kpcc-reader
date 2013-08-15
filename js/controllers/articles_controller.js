Kpcc.ArticlesController = Ember.ArrayController.extend({
    // Default current page. This gets modified by loadMore.
    currentPage     : 1,
    limit           : 10,
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
