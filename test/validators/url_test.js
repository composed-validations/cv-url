var errorMessage, validationsLibrary, validator, testOk;

validationsLibrary = require("composed-validations");
urlValidator       = require("../../lib/validators/url.js")(validationsLibrary);
errorMessage       = "is not a valid url";

testOk = function (value) {
  it("expect to pass " + value + " and return itself", function() {
    validator = urlValidator.test(value);

    expect(validator).eq(value);
  });
};

testFail = function (value) {
  it("expect to pass " + value + " and throw and error message", function() {
    expect(function() {
      urlValidator.test(value);
    }).throw(errorMessage);
  });
};

describe("URL Validator", function() {
  describe("Passing Invalid URL", function() {
    testFail("http://✪df.ws/1234");
    testFail("rdar:/1234");
    testFail("http://➡.ws/䨹");
    testFail("bit.ly/foo");
    testFail("WWW.EXAMPLE.COM");
  });

  describe("Passing a VALID URL", function() {
    testOk("http://www.RegExr.com");
    testOk("http://RegExr.com");
    testOk("http://www.RegExr.com?2rjl6");
    testOk("http://www.RegExr.com?2rjl6&x=99&498");
    testOk("http://www.RegExr.com?2rjl6(v85)&x=99&498");
    testOk("http://RegExr.com#foo");
    testOk("http://RegExr.com#foo(bar)");
    testOk("This is my website (http://www.microsoft.com)");
    testOk("This is my website [http://www.microsoft.com]");
    testOk("http://foo.com/blah_blah");
    testOk("http://foo.com/blah_blah/");
    testOk("(Something like http://foo.com/blah_blah)");
    testOk("http://foo.com/blah_blah_(wikipedia)");
    testOk("http://foo.com/more_(than)_one_(parens)");
    testOk("(Something like http://foo.com/blah_blah_(wikipedia))");
    testOk("http://foo.com/blah_(wikipedia)#cite-1");
    testOk("http://foo.com/blah_(wikipedia)_blah#cite-1");
    testOk("http://foo.com/unicode_(✪)_in_parens");
    testOk("http://foo.com/(something)?after=parens");
    testOk("http://foo.com/blah_blah.");
    testOk("http://foo.com/blah_blah/.");
    testOk("<http://foo.com/blah_blah>");
    testOk("<http://foo.com/blah_blah/>");
    testOk("http://foo.com/blah_blah,");
    testOk("http://www.extinguishedscholar.com/wpglob/?p=364.");
    testOk("rdar://1234");
    testOk("x-yojimbo-item://6303E4C1-6A6E-45A6-AB9D-3A908F59AE0E");
    testOk("message://%3c330e7f840905021726r6a4ba78dkf1fd71420c1bf6ff@mail.gmail.com%3e");
    testOk("www.c.ws/䨹");
    testOk("<tag>http://example.com</tag>");
    testOk("Just a www.example.com link.");
    testOk("http://example.com/something?with,commas,in,url, but not at end");
    testOk("What about <mailto:gruber@daringfireball.net?subject=TEST> (including brokets).");
    testOk("mailto:name@example.com");
    testOk("http://www.asianewsphoto.com/(S(neugxif4twuizg551ywh3f55))/Web_ENG/View_DetailPhoto.aspx?PicId=752");
    testOk("http://www.asianewsphoto.com/(S(neugxif4twuizg551ywh3f55))");
    testOk("http://lcweb2.loc.gov/cgi-bin/query/h?pp/horyd:@field(NUMBER+@band(thc+5a46634))");
  });
});
