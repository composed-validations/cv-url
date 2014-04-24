URL Validator Plugin for Composed Validations Library
==============================

[![Build Status](https://drone.io/github.com/composed-validations/cv-url/status.png)](https://drone.io/github.com/composed-validations/cv-url/latest)

This is the Official URL Validator Plugin for the Composed Validations Library.

# Installation
```
npm install cv-url
```

# How to Use
```javascript
var validations  = require('composed-validations');
var urlValidator = require('cv-url')(validations);

urlValidator.test("http://www.RegExr.com"); // will return http://www.RegExr.com
urlValidator.test('\\http@://google.com'); // false (will throw an error with the error message: is not a valid url)

```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT License](http://djalmaaraujo.mit-license.org)
