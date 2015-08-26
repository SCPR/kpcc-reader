import Ember from 'ember';

export function relativeDate(date) {
  return moment(date[0]).fromNow();
}

export default Ember.Helper.helper(relativeDate);
