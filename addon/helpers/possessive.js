import Ember from 'ember';

const APOSTROPHE_CHAR = '’';
const { isBlank, isEqual } = Ember;

export function possessive([ string ]/*, hash*/) {
  if (isBlank(string)) {
    return string;
  }
  let lastChar = string.slice(-1);
  let endOfWord = isEqual(lastChar, 's') ? APOSTROPHE_CHAR : `${APOSTROPHE_CHAR}s`;
  return `${string}${endOfWord}`;
}

export default Ember.Helper.helper(possessive);
