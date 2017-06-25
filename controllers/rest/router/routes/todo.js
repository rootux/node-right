module.exports = globals => [
  {
    description: 'Get all todos',
    method: 'get',
    route: '/todo',
    cb: (params, query, body) => globals.services.todo.get(params)(query)(body),
  },
  {
    description: 'Get a todo',
    method: 'get',
    route: '/todo/:id',
    cb: (params, query, body) => globals.services.todo.get(params)(query)(body),
  },
  {
    description: 'Create a user',
    method: 'post',
    route: '/todo',
    cb: (params, query, body) => globals.services.todo.create(params)(query)(body),
  },
  {
    description: 'Modify a user',
    method: 'put',
    route: '/todo/:id',
    cb: (params, query, body) => globals.services.todo.update(params)(query)(body),
  },
  {
    description: 'Delete a user',
    method: 'delete',
    route: '/todo/:id',
    cb: (params, query, body) =>
      globals.services.todo.delete(params)(query)(body),
  },
];