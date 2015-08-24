import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr(),
  url: DS.attr('string'),
  byline: DS.attr('string'),
  position: DS.attr('number'),
  duration: DS.attr('number'),
  filesize: DS.attr('number')
});
