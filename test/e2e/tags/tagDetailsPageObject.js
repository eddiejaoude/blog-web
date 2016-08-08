var TagDetailsPageObject = function () {
  var name = element(by.css('h2'));
  var deleteButton = element(by.css('#delete'));

  this.getName = function() {
    return name.getWebElement().getText();
  };

  this.clickDelete = function() {
    return deleteButton.click();
  };
};

module.exports = new TagDetailsPageObject();
