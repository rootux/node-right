const _ = require('lodash');

const errors = {
  MODEL_MISSING_PROPERTY: {
    message: 'You have tried to create a model without all required properties',
    code: 500,
  },
};

function _Error (type, info) {
  this.data = _.merge(
    errors[type]
      ? errors[type]
      : {
        message: `Error ${type} does not exist`,
        code: 500,
        info,
      },
    info ? { info } : null);
}

_Error.prototype = new Error();

_Error.prototype.toJSON = function () {
  return this.data;
};


function CustomError (type, info) {
  throw new _Error(type, info);
}

module.exports = CustomError;