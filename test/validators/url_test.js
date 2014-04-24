var errorMessage, validationsLibrary, validator;

validationsLibrary = require("composed-validations");
urlValidator       = require("../../lib/validators/url.js")(validationsLibrary);
errorMessage       = "is not a valid url";

describe("URL Validator", function() {
  describe("Passing Invalid URL", function() {
    it("expect to fail passing bad url", function() {
      expect(function() {
        urlValidator.test("http@://badurl:3000");
      }).throw(errorMessage);
    });
  });
});
