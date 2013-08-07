Ember.Handlebars.registerBoundHelper('date', function(date) {
  return moment(date).format('MMMM Do YYYY, h:mma');
});
