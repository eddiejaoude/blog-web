var TagListPageObject = function () {
  var tagList = element.all(by.css('.tags tbody tr'));

  this.get = function () {
    browser.get('http://localhost:9000/#/tags');
  };

  this.getTags = function () {
    return tagList;
  };
};

module.exports = new TagListPageObject();
