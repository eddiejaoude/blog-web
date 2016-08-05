'use strict';

var tagListPageObject = require('./tagListPageObject.js');

describe('Tag page displays a list of Tags', function () {

  it('should have a list of Posts', function () {
    tagListPageObject.get();

    expect(tagListPageObject.getTags().count()).toBeGreaterThan(0);
  });
});

describe('Create button go to Create page', function () {

  it('should have Create button', function () {
    tagListPageObject.get();

    expect(tagListPageObject.getCreate().isPresent()).toBe(true);
  });

  it('should go to the Tag Create page', function () {
    tagListPageObject.get();
    tagListPageObject.create();

    browser.driver.wait(function () {
      return browser.driver.getCurrentUrl().then(function (url) {
        return (/create/).test(url);
      });
    });
    expect(browser.getCurrentUrl()).toEqual('http://localhost:9000/#/tags/create');
  });
});
