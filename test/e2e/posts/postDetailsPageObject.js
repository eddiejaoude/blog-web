var PostDetailsPageObject = function () {
  var title = element(by.css('.card-header'));
  var description = element(by.css('.card-text'));
  var tagListNames = element.all(by.repeater('tag in pc.post.tags').column('tag.name'));
  var deleteButton = element(by.css('#deleteButton'));
  var editButton = element(by.css('#editButton'));

  this.getTitle = function() {
    return title.getWebElement().getText();
  };

  this.getDescription = function() {
    return description.getWebElement().getText();
  };

  this.getTagListNames = function() {
    return tagListNames;
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
};

module.exports = new PostDetailsPageObject();
