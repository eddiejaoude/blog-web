var TagEditPageObject = function () {
  var nameInput = element(by.css('form.tagEdit input#name'));
  var submit = element(by.css('form.tagEdit button'));

  this.get = function (id) {
    browser.get('http://localhost:9000/#/tags/' + id + 'edit');
  };

  this.clear = function() {
    nameInput.clear();
  };

  this.setName = function(name) {
    nameInput.clear().sendKeys(name);
  };

  this.submit = function() {
    submit.click();
  };
};

module.exports = new TagEditPageObject();
