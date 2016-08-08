var TagDetailsPageObject = function () {
  var name = element(by.css('h2'));
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
};

module.exports = new TagDetailsPageObject();
