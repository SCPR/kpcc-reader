Kpcc.ArticleView = Ember.View.extend({
    didInsertElement: function() {
        $('body').scrollTop(0).addClass('article');
    }
});
