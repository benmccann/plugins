/* eslint-disable global-require */

try {
  t.is(require('./dep.js').foo, 'foo');
} catch (err) {
  throw new Error(`Could not require: ${err}`);
}
