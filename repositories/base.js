const _ = require('lodash');

module.exports = globals => modelName => ({
  get: meta => () => globals.db(`${modelName}s`)
    .where(meta)
    .then(models =>
      models.map(model =>
        new globals.models[`${modelName[0].toUpperCase()}${modelName.slice(1)}`](model))),

  delete: meta => () =>
    globals.db(`${modelName}s`)
    .where(meta)
    .delete(),

  save: meta => model =>
    (meta.id
      ? globals.db(`${modelName}s`)
        .where(meta)
        .update(_.merge(model.toJSON(), { updated_at: new Date().toUTCString() }))
      : globals.db(`${modelName}s`)
        .insert(model.toJSON())),
});