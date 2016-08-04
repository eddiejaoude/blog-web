'use strict';

var tagPageObject = require('./tagPageObject.js');

describe('Tag page displays a list of Tags', function () {

  beforeEach(function () {
    tagPageObject.get();
  });

  it('should have a list of Posts', function () {
    expect(tagPageObject.getTags()).toBeGreaterThan('0');
  });
});
