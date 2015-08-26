import Ember from 'ember';

export function eachSlice(thing) {
  // debugger
  return thing.toArray().inGroupsOf(3);
}

export default Ember.Helper.helper(eachSlice);
