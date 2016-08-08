'use strict';

var tagCreatePageObject = require('./tagCreatePageObject.js');
var tagListPageObject = require('./tagListPageObject.js');
var tagDetailsPageObject = require('./tagDetailsPageObject.js');
var KeyGenerator = require('uuid-key-generator');

var keygen = new KeyGenerator();

describe('Create a Tag, see in List, view the Details, and Delete', function () {

  var name = keygen.generateKey();

  it('should have Create button', function () {
    tagListPageObject.get();

    expect(tagListPageObject.getCreate().isPresent()).toBe(true);
  });

  it('should go to the Tag Create page', function () {
    tagListPageObject.get();
    tagListPageObject.create();

    expect(browser.getCurrentUrl()).toEqual('http://localhost:9000/#/tags/create');
  });

  it('should create a Tag', function () {
    tagCreatePageObject.setName(name);

    tagCreatePageObject.submit();
  });

  it('should be redirected to Tag list', function () {
    expect(browser.getCurrentUrl()).toEqual('http://localhost:9000/#/tags');
  });

  it('should be in Tag list', function () {
    expect(tagListPageObject.getTagListNames().count()).toBeGreaterThan(0);
    expect(tagListPageObject.getTagListNames().getText()).toContain(name);
  });

  it('should view Tag details', function () {
    tagListPageObject.clickTagByName(name).then(function() {
      expect(tagDetailsPageObject.getName()).toEqual(name);
    });
  });

  it('should delete the Tag', function () {
    tagDetailsPageObject.clickDelete();
  });

  it('should be redirected to Tag list', function () {
    expect(browser.getCurrentUrl()).toEqual('http://localhost:9000/#/tags');
  });

  it('should not be in Tag list', function () {
    expect(tagListPageObject.getTagListNames().getText()).not.toContain(name);
  });
});
