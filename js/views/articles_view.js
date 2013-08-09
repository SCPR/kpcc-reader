Kpcc.ArticlesView = Ember.View.extend({
    scrollIsLocked: false,

    didInsertElement: function() {
        var view = this;
        $(window).bind('scroll', function() {
            view.didScroll();
        });
    },

    didScroll: function() {
        if(this.isScrolledToBottom()) {
            this.get('controller').send('loadMore');
        }
    },

    willDestroyElement: function() {
        $(window).unbind('scroll');
    },

    isScrolledToBottom: function() {
        var currentPositionInDocument, farthestCanScroll, padding;
        padding = 200;

        currentPositionInDocument   = $(document).scrollTop();
        farthestCanScroll           = $(document).height() - $(window).height();

        return (currentPositionInDocument + padding) >= farthestCanScroll;
    }
});
