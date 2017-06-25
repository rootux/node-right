const _ = require('lodash');

const Base = function () {};
const CustomError = require('./error');

Base.prototype.get = function (prop) {
  return this.data[prop];
};

Base.prototype.set = function (prop, val) {
  return Object.assign(this.data,
    arguments.length === 1
    ? prop
    : { [prop]: val });
};

Base.prototype.toJSON = function () {
  return this.data;
};

Base.create = (Model, data) =>
  Base.checkRequiredProperties(Model.requiredProperties, data)
  && _.merge(Model, { data },
    data.created_at
    ? {}
    : { data: { created_at: new Date().toUTCString() } });

Base.checkRequiredProperties = (requiredProperties, data) => {
  if (!Array.isArray(requiredProperties)) {
    return new CustomError('UNEXPECTED_TYPE', 'requiredProperties');
  }

  const missingProperties = requiredProperties
    .filter(p => data[p] === undefined);
  return missingProperties.length
  ? new CustomError('MODEL_MISSING_PROPERTY', missingProperties.join(', '))
  : true;
};

module.exports = Base;