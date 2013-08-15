Kpcc.Article = DS.Model.extend({
    title           : DS.attr('string'),
    short_title     : DS.attr('string'),
    published_at    : DS.attr('date'),
    byline          : DS.attr('string'),
    teaser          : DS.attr('string'),
    body            : DS.attr('string'),
    public_url      : DS.attr('string'),
    assets          : DS.hasMany('Kpcc.Asset'),
    category        : DS.belongsTo('Kpcc.Category'),

    thumbnail: function() {
        if(this.get('assets.length')) {
            return this.get('assets.firstObject.thumbnail');
        }
    }.property('assets'),

    asset: function() {
        if(this.get('assets.length')) {
            return this.get('assets.firstObject.small');
        }
    }.property('assets')

});
