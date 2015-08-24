import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    var view = this;
    $(window).bind('scroll', function() {
      view.didScroll();
    });
    $('body').removeClass('article');
  },

  didScroll: function() {
    if(this.isScrolledToBottom()) {
      this.sendAction('action');
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
