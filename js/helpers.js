Ember.Handlebars.helper('relativeDate', function(date) {
  return moment(date).fromNow();
});


Ember.Handlebars.helper('date', function(date) {
  return moment(date).format('MMMM Do YYYY, h:mma');
});


