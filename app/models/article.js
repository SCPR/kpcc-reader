import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  short_title: DS.attr('string'),
  published_at: DS.attr('string'),
  byline: DS.attr('string'),
  teaser: DS.attr('string'),
  body: DS.attr('string'),
  public_url: DS.attr('string'),
  assets: DS.hasMany('asset',{embedded: 'always'}),
  audio: DS.attr('string'),
  category: DS.belongsTo('category'),
  imgWrapperStyle: function() {
    var assets, url;

    assets = this.get('assets');
    if(!assets.get('length')) {
      return '';
    }

    url = assets.get('firstObject.small.url');
    return "background:url("+url+") no-repeat;background-size:cover;";
  }.property('assets.@each')
});
