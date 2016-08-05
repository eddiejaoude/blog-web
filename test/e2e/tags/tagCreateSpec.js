'use strict';

var tagCreatePageObject = require('./tagCreatePageObject.js');
var tagListPageObject = require('./tagListPageObject.js');
var KeyGenerator = require('uuid-key-generator');

var keygen = new KeyGenerator();

describe('Create a Tag', function () {

  var name = keygen.generateKey();

  it('should create a Tag', function () {
    tagCreatePageObject.get();

    tagCreatePageObject.setName(name);

    tagCreatePageObject.submit();
  });

  it('should be redirected to Tag list', function () {
    browser.driver.wait(function () {
      return browser.driver.getCurrentUrl().then(function (url) {
        return (/tags/).test(url);
      });
    });
    expect(browser.getCurrentUrl()).toEqual('http://localhost:9000/#/tags');
  });

  it('should be in Tag list', function () {
    var tags = tagListPageObject.getTags();

    var data = element.all(by.repeater('tag in tc.tags').column('tag.name'));

    expect(data.getText()).toContain(name);
  });
});
