const _ = require('lodash');
const baseRepositories = require('./base');

module.exports = (globals) => {
  const base = baseRepositories(globals)('todo');

  return _.merge({}, base, {});
};