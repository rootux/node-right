const _ = require('lodash');
const dev = require('./dev');
const test = require('./test');
const staging = require('./staging');
const production = require('./production');

const environments = { dev, test, staging, production };
const defaultSettings = {
  infrastructure: {
    port: 8888,
  },
  db: {},
};

module.exports = () =>
  (Object.keys(environments)
    .indexOf(process.env.NODE_ENV) > -1
      ? _.merge({}, defaultSettings, environments[process.env.NODE_ENV])
      : _.merge({}, defaultSettings, dev));
