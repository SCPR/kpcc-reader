Kpcc.ArticlesController = Ember.ArrayController.extend({
    currentPage     : 0,
    limit           : 12,
    types           : "news,blogs,segments",

    sortAscending   : false,
    sortProperties  : ['published_at'],

    // FIXME: This doesn't remove articles which have been taken out of
    // the API for some reason (deleted or unpublished).
    checkForNewRecords: function() {
        console.log("checking for new records");
        this.store.find("article", {
            page    : 1,
            limit   : this.get('limit'),
            type    : this.get('types')
        });
    },

    loadMore: function() {
        if(this.get('isLoading')) return;

        this.incrementProperty('currentPage');
        this.set('isLoading', true);

        var self = this;

        this.store.find("article", {
            page    : this.get('currentPage'),
            limit   : this.get('limit'),
            types   : this.get('types')

        }).then(function(){
            self.set('isLoading', false)
        });
    }
});
