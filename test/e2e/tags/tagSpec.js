'use strict';

var tagListPageObject = require('./pageObjects/listPageObject.js');
var tagDetailsPageObject = require('./pageObjects/detailsPageObject.js');
var tagCreatePageObject = require('./pageObjects/createPageObject.js');
var tagEditPageObject = require('./pageObjects/editPageObject.js');

var KeyGenerator = require('uuid-key-generator');

var keygen = new KeyGenerator();
var name = keygen.generateKey();
var updatedName = name + '1';

describe('Create a Tag, see in list, view Tag details, edit Tag, delete Tag, not in the list', function () {
  it('should have Create button', function () {
    tagListPageObject.get();

    expect(tagListPageObject.getCreate().isPresent()).toBe(true);
  });

  it('should go to the Tag Create page', function () {
    tagListPageObject.create();

    expect(browser.getCurrentUrl()).toEqual('http://localhost:9000/#/tags/create');
  });

  it('should not create an invalid Tag', function () {
    tagCreatePageObject.submit();

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
    tagListPageObject.clickTagByName(name).then(function () {
      expect(tagDetailsPageObject.getName()).toEqual(name);
    });
  });

  it('should have an edit button', function () {
    expect(tagDetailsPageObject.getEdit().isPresent()).toBe(true);
  });

  it('should edit the Tag', function () {
    tagDetailsPageObject.clickEdit();
    tagEditPageObject.setName(updatedName);
    tagEditPageObject.submit();
  });

  it('should be redirected to Tag list after a successful update', function () {
    expect(browser.getCurrentUrl()).toEqual('http://localhost:9000/#/tags');
  });

  it('should appear in list with new name', function () {
    expect(tagListPageObject.getTagListNames().getText()).not.toContain(name);
    expect(tagListPageObject.getTagListNames().getText()).toContain(updatedName);
  });

  it('should have a delete button', function () {
    tagListPageObject.clickTagByName(updatedName).then(function() {
      expect(tagDetailsPageObject.getDelete().isPresent()).toBe(true);
    });
  });

  it('should delete the Tag and redirect to list', function () {
    tagDetailsPageObject.clickDelete().then(function() {
      expect(browser.getCurrentUrl()).toEqual('http://localhost:9000/#/tags');
    });
  });

  it('should not be in Tag list', function () {
    expect(tagListPageObject.getTagListNames().getText()).not.toContain(updatedName);
  });
});
