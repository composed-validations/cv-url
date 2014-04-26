EXPRESSION = require('../url_expression.js');

module.exports = function(cv) {
  return {
    test: function(value) {
      if (EXPRESSION.exec(value)) {
        return value;
      } else {
        throw cv.error("is not a valid url", value, this);
      }
    }
  };
};
