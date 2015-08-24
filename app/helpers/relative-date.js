import Ember from 'ember';

export function relativeDate(date) {
  return moment(date).fromNow();
}

export default Ember.Helper.helper(relativeDate);
