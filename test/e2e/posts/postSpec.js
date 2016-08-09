'use strict';

var tagListPageObject = require('../tags/tagListPageObject.js');
var tagCreatePageObject = require('../tags/tagCreatePageObject.js');
var tagDetailsPageObject = require('../tags/tagDetailsPageObject.js');
var postListPageObject = require('./postListPageObject.js');
var postCreatePageObject = require('./postCreatePageObject.js');
var postEditPageObject = require('./postEditPageObject.js');
var postDetailsPageObject = require('./postDetailsPageObject.js');

var KeyGenerator = require('uuid-key-generator');

var keygen = new KeyGenerator();
var name = keygen.generateKey();
var title = keygen.generateKey();
var updatedTitle = keygen.generateKey();
var description = keygen.generateKey();

describe('Create Post with Tag, see in List, view Post details, edit Post with additional Tag, filter Post by Tag, delete Post', function () {

  it('should create a Tag to be used below', function () {
    tagCreatePageObject.get();
    tagCreatePageObject.setName(name);
    tagCreatePageObject.submit();

    expect(browser.getCurrentUrl()).toEqual('http://localhost:9000/#/tags');
    expect(tagListPageObject.getTagListNames().getText()).toContain(name);
  });

  it('should have a create button', function () {
    postListPageObject.get();

    expect(postListPageObject.getCreate().isPresent()).toBe(true);
  });

  it('should go to Create page', function () {
    postListPageObject.create();

    expect(browser.getCurrentUrl()).toEqual('http://localhost:9000/#/posts/create');
  });

  it('should create a Post', function () {
    postCreatePageObject.setTitle(title);
    postCreatePageObject.setDescription(description);
    postCreatePageObject.setTags([name]);

    postCreatePageObject.submit();
  });

  it('should be redirected to Post list', function () {
    expect(browser.getCurrentUrl()).toEqual('http://localhost:9000/#/');
  });

  it('should be in Post list', function () {
    expect(postListPageObject.getPostListTitles().count()).toBeGreaterThan(0);
    expect(postListPageObject.getPostListTitles().getText()).toContain(title);

    // @TODO test Post description is <100
  });

  it('should view Post details', function () {
    postListPageObject.clickPostByTitle(title).then(function () {
      expect(postDetailsPageObject.getTitle()).toEqual(title);
      expect(postDetailsPageObject.getDescription()).toEqual(description);
      // expect(postDetailsPageObject.getTagListNames().getText()).toContain(name); // @TODO not getting list of Tags
    });
    // @TODO test Post description is >100 (e.g. no truncation)
  });

  it('should have an edit button', function () {
    expect(postDetailsPageObject.getEdit().isPresent()).toBe(true);
  });

  it('should edit the Post', function () {
    postDetailsPageObject.clickEdit();
    postEditPageObject.setTitle(updatedTitle);
    postEditPageObject.submit();
  });

  it('should be redirected to Post list after successful update', function () {
    expect(browser.getCurrentUrl()).toEqual('http://localhost:9000/#/');
  });

  it('should appear in list with new name', function () {
    expect(postListPageObject.getPostListTitles().getText()).not.toContain(title);
    expect(postListPageObject.getPostListTitles().getText()).toContain(updatedTitle);
  });

  it('should list Posts with this Tag', function () {
    postListPageObject.clickTagByName(name);
    expect(browser.getCurrentUrl()).toMatch(/tags\/\d+/);
    expect(tagDetailsPageObject.getPostListTitles().count()).toEqual(1);
    expect(tagDetailsPageObject.getPostListTitles().getText()).toContain(updatedTitle);
  });

  it('should have a delete button', function () {
    postListPageObject.get();
    postListPageObject.clickPostByTitle(updatedTitle);
    expect(browser.getCurrentUrl()).toMatch(/posts\/\d+/);
    expect(postDetailsPageObject.getDelete().isPresent()).toBe(true);
  });

  it('should delete the Post and redirect to list page', function () {
    postDetailsPageObject.clickDelete();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:9000/#/');
  });

  it('should not be in the Post list', function () {
    expect(postListPageObject.getPostListTitles().getText()).not.toContain(updatedTitle);
  });

  it('should be in Tag list after Post is deleted', function () {
    tagListPageObject.get();
    expect(tagListPageObject.getTagListNames().getText()).toContain(name);
  });
});
