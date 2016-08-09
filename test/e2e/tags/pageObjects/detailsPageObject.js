var TagDetailsPageObject = function () {
  var name = element(by.css('h2'));
  var postListTitles = element.all(by.repeater('post in tc.tag.posts').column('post.title'));
  var deleteButton = element(by.css('#deleteButton'));
  var editButton = element(by.css('#editButton'));

  this.getName = function() {
    return name.getWebElement().getText();
  };

  this.getDelete = function () {
    return deleteButton;
  };

  this.getEdit = function () {
    return editButton;
  };

  this.clickEdit = function() {
    return editButton.click();
  };

  this.clickDelete = function() {
    return deleteButton.click();
  };

  this.getPostListTitles = function () {
    return postListTitles;
  };
};

module.exports = new TagDetailsPageObject();
