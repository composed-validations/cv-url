EXPRESSION = require('../url_expression.js');

module.exports = function(cv) {
  return {
    test: function(value) {
      throw new cv.ValidationError("is not a valid url", value, this);
    }
  };
};
