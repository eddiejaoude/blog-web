var TagListPageObject = function () {
  var tagList = element.all(by.repeater('tag in tc.tags').column('tag.name'));
  var createButton = element(by.css('#createButton'));

  this.get = function () {
    browser.get('http://localhost:9000/#/tags');
  };

  this.getTags = function () {
    return tagList;
  };

  this.getCreate = function() {
    return createButton;
  };

  this.create = function() {
    createButton.click();
  };
};

module.exports = new TagListPageObject();
