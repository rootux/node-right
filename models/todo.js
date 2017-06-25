const Base = require('./base');

function Todo (data) {
  return Base.create(this, data);
}
Todo.prototype = Object.assign(Todo.prototype, Base.prototype);

Todo.prototype.requiredProperties = [
  'type',
  'content',
];

Todo.create = data => new Todo(data);


module.exports = Todo;