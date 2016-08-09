var PostListPageObject = function () {
  var postList = element.all(by.css('.blogs .card'));
  var postListTitles = element.all(by.repeater('post in pc.posts').column('post.title'));
  var createButton = element(by.css('#createButton'));

  this.get = function () {
    browser.get('http://localhost:9000/#/');
  };

  this.getCreate = function () {
    return createButton;
  };

  this.getPostListTitles = function () {
    return postListTitles;
  };

  this.create = function () {
    return createButton.click();
  };

  this.getPosts = function () {
    return postList;
  };

  this.clickPostByTitle = function (title) {
    return element(by.linkText(title)).click();
  };

  this.clickTagByName = function (name) {
    return element(by.linkText(name)).click();
  };
};

module.exports = new PostListPageObject();
