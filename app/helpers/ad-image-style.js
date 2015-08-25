import Ember from 'ember';

export function adImageStyle(url) {
  return "background:url("+url+") no-repeat;background-size:cover;";
}

export default Ember.Helper.helper(adImage);
