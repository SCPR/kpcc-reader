Ember.Handlebars.helper('relativeDate', function(date) {
  return moment(date).fromNow();
});


Ember.Handlebars.helper('date', function(date) {
  return moment(date).format('MMMM Do YYYY, h:mma');
});


Ember.Handlebars.registerHelper('asset', function(size) {
    var url;
    url = Ember.Handlebars.helpers.assetUrl.apply(this, [size]);

    return new Handlebars.SafeString('<img src="'+url+'" />');
}, 'assets');


Ember.Handlebars.registerHelper('assetUrl', function(size) {
    if(!this.get('assets.length')) return "";
    return this.get('assets.firstObject.'+size+'.url');
}, 'assets');

Ember.Handlebars.registerHelper('audio', function() {
    if(!this.get('audio.length')) return "";
    url = this.get('audio.firstObject.url');

    return new Handlebars.SafeString(
        '<audio controls src="'+url+'"></audio>'
    )
})
