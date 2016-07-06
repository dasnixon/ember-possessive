import { possessive } from 'dummy/helpers/possessive';
import { module, test } from 'qunit';

const APOSTROPHE_CHAR = '’';

module('Unit | Helper | possessive');

test(`it adds ${APOSTROPHE_CHAR}s to end of string when the word doesn't end with an s`, function(assert) {
  let string = possessive(['Ryan']);
  assert.equal(string, `Ryan${APOSTROPHE_CHAR}s`);
});

test(`it adds ${APOSTROPHE_CHAR} to end of string when the word does end with an s`, function(assert) {
  let string = possessive(['Chris']);
  assert.equal(string, `Chris${APOSTROPHE_CHAR}`);
});
