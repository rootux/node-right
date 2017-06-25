const baseServices = require('./base');

module.exports = (globals) => {
  const base = baseServices(globals)('todo');

  const save = params => query => body =>
    globals.repositories.todo
    .save(Object.assign({}, params, query))(new globals.models.Todo(body));

  return Object.assign({}, base, {
    create: params => query => body =>
      base._returnActual(save(params)(query)(body))(),

    update: params => query => body =>
      base._returnActual(base.update(params)(query)(body))(params.id),
  });
};