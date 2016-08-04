'use strict';

var mainPageObject = require('./mainPageObject.js');

describe('Blog home page displays a list of Posts', function () {

  beforeEach(function () {
    mainPageObject.get();
  });

  it('should have a list of Posts', function () {
    expect(mainPageObject.getPosts()).toBeGreaterThan('0');
  });
});
