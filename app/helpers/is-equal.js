import Ember from 'ember';

export function isEqual(a) {
  return a[0] == a[1];
}

export default Ember.Helper.helper(isEqual);
