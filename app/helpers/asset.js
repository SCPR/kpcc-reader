import Ember from 'ember';
import assetUrl from './asset-url';

// export function asset(size, showMeta, model) {
export default Ember.Handlebars.makeBoundHelper( function(size, showMeta, model) {
  // debugger
  var url         = model.get('assets.firstObject.' + size + '.url'),
      caption     = model.get('assets.firstObject.caption'),
      owner       = model.get('assets.firstObject.owner');

  // if (!url){
  //   url = "";
  // }
  // debugger

  var html = '<img src="'+url+'" alt="'+caption+'" />';

  if (showMeta) {
      html += '<figcaption><span>'+caption+'</span>';
      html += '<mark>'+owner+'</mark></figcaption>';
  }

  return new Ember.Handlebars.SafeString(html);
});