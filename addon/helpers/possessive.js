import Ember from 'ember';
import possessiveFunc from 'ember-possessive/utils/possessive';

const { Helper } = Ember;
const { helper } = Helper;

export function possessive([ string ]/*, hash*/) {
  return possessiveFunc(string);
}

export default helper(possessive);
