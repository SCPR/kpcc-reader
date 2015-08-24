import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  caption: DS.attr(),
  owner: DS.attr(),
  thumbnail: DS.attr(),
  small: DS.attr(),
  large: DS.attr(),
  full: DS.attr()
});
