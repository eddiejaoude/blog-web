'use strict';

var tagListPageObject = require('./tagListPageObject.js');

describe('Tag page displays a list of Tags', function () {

  beforeEach(function () {
    tagListPageObject.get();
  });

  it('should have a list of Posts', function () {
    expect(tagListPageObject.getTags()).toBeGreaterThan('0');
  });
});
