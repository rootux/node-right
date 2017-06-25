const todo = require('./todo');
const user = require('./user');

module.exports = globals => []
  .concat(todo(globals))
  .concat(user(globals));