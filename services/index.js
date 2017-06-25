const todo = require('./todo');

module.exports = globals => ({
  todo: todo(globals),
});