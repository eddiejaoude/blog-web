var TagCreatePageObject = function () {
  var nameInput = element(by.css('form.tagCreate input#name'));
  var submit = element(by.css('form.tagCreate button'));

  this.get = function () {
    browser.get('http://localhost:9000/#/tags/create');
  };

  this.setName = function(name) {
    nameInput.sendKeys(name);
  };

  this.submit = function() {
    submit.click();
  };
};

module.exports = new TagCreatePageObject();
