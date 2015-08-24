import Ember from 'ember';

export function assetUrl(_this, size) {
  if(!_this.get('assets.length')){
    return "";
  }
  return _this.get('assets.firstObject.' + size + '.url');
}

export default Ember.Helper.helper(assetUrl);