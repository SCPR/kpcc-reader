import Ember from 'ember';

export function absoluteDate(date) {
  return moment(date).format('MMMM Do YYYY, h:mma');
}

export default Ember.Helper.helper(absoluteDate);
