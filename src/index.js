const set = require('./setValue');
const get = require('./getValue');
const mapObj = require('./mapObj');
const camelcase = require('./camelcase');
const camelcaseKeys = require('./camelcaseKeys');
const isObject = require('./isObject');
const isPlainObject = require('./isPlainObject');
const quickLru = require('./quickLru');

module.exports = {
  set,
  get,
  mapObj,
  camelcase,
  camelcaseKeys,
  isObject,
  isPlainObject,
  quickLru,
};