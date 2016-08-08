var TagListPageObject = function () {
  var tagList = element(by.repeater('tag in tc.tags'));
  var tagListNames = element.all(by.repeater('tag in tc.tags').column('tag.name'));
  var createButton = element(by.css('#createButton'));

  this.get = function () {
    browser.get('http://localhost:9000/#/tags');
  };

  this.getTagList = function () {
    return tagList;
  };

  this.getTagListNames = function () {
    return tagListNames;
  };

  this.getCreate = function () {
    return createButton;
  };

  this.create = function () {
    return createButton.click();
  };

  this.getTagIdByName = function (name) {
    return element(by.linkText(name)).getWebElement().getId();
  };

  this.clickTagByName = function (name) {
    return element(by.linkText(name)).click();
  };
};

module.exports = new TagListPageObject();
