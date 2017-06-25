const Promise = require('bluebird');

const mockUser = (id, body) => (Object.assign({
  id: `${id || Math.ceil(Math.random() * 1000)}`,
  type: 'user',
  content: 'my random User',
}, body));

module.exports = globals => [
  {
    description: 'Get all users',
    method: 'get',
    route: '/user',
    cb: (params, query, body) =>
      Promise.resolve([mockUser(params.id), mockUser(params.id + 1)]),
  },
  {
    description: 'Get a user',
    method: 'get',
    route: '/user/:id',
    cb: (params, query, body) =>
      Promise.resolve([mockUser(params.id)]),
  },
  {
    description: 'Create a user',
    method: 'post',
    route: '/user',
    cb: (params, query, body) =>
      Promise.resolve([mockUser(params.id, body)]),
  },
  {
    description: 'Modify a user',
    method: 'put',
    route: '/user/:id',
    cb: (params, query, body) =>
      Promise.resolve([mockUser(params.id, body)]),
  },
  {
    description: 'Delete a user',
    method: 'delete',
    route: '/user/:id',
    cb: (params, query, body) =>
      Promise.resolve([1]),
  },
];