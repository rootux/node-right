const _ = require('lodash');

module.exports = globals => serviceName => ({
  service: serviceName,
  get: params => query => () =>
    globals.repositories[serviceName].get(Object.assign({}, params, query))(),

  create: params => query => body =>
    globals.repositories[serviceName].save(Object.assign({}, params, query))(
      new globals.models[`${serviceName[0].toUpperCase()}${serviceName.slice(1)}`](body)),

  update: params => query => body =>
    globals.repositories[serviceName].get(Object.assign({}, params, query))()
    .then(([r]) => (!r
      ? []
      : globals.repositories[serviceName]
        .save(Object.assign({}, params, query))(
          new globals.models[`${serviceName[0].toUpperCase()}${serviceName.slice(1)}`](_.merge({}, r.data, body))))),

  delete: params => query => () =>
    globals.repositories[serviceName].delete(Object.assign({}, params, query))(),

  _returnActual: result => id =>
    result
    .then(createdId =>
      globals.repositories[serviceName]
      .get({ id: id || createdId[0] })()),
});