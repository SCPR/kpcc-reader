Kpcc.ArticleView = Ember.View.extend({
    didInsertElement: function() {
        this.scrollToTop()
        this.addBodyClass()
    },

    modelChanged: function() {
        this.scrollToTop()
    }.observes('controller.model'),

    scrollToTop: function() {
        $('body').scrollTop(0)
    },

    addBodyClass: function() {
        $('body').addClass('article')
    }
});
