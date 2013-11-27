// {{relativeDate Date}}
// Returns the relative date from now.
Ember.Handlebars.helper('relativeDate', function(date) {
  return moment(date).fromNow();
});


// {{date Date}}
// Returns the absolute date.
Ember.Handlebars.helper('date', function(date) {
  return moment(date).format('MMMM Do YYYY, h:mma');
});


// {{asset String this}}
// Returns the asset IMG tag for the requested size, along with caption and credit.
Ember.Handlebars.registerHelper('asset', function(size) {
    var url;
    url = Ember.Handlebars.helpers.assetUrl.apply(this, [size]);
    caption = this.get('assets.firstObject.caption');
    owner = this.get('assets.firstObject.owner');

    return new Handlebars.SafeString('<img src="'+url+'" alt="'+caption+'" /><figcaption><span>'+caption+'</span><mark>'+owner+'</mark></figcaption>');
}, 'assets');


// {{assetUrl String this}}
// Returns the asset URL for the requested size.
Ember.Handlebars.registerHelper('assetUrl', function(size) {
    if(!this.get('assets.length')) return "";
    return this.get('assets.firstObject.'+size+'.url');
}, 'assets');


// {{audio this}}
// Renders the article's primary audio as an AUDIO element.
Ember.Handlebars.registerHelper('audio', function() {
    if(!this.get('audio.length')) return "";
    url = this.get('audio.firstObject.url');

    return new Handlebars.SafeString(
        '<audio controls src="'+url+'"></audio>'
    )
})
