var PostEditPageObject = function () {
  var titleInput = element(by.css('form.postEdit input#title'));
  var descriptionInput = element(by.css('form.postEdit input#description'));
  var submit = element(by.css('form.postEdit button'));

  this.get = function (id) {
    browser.get('http://localhost:9000/#/posts/' + id + '/edit');
  };

  this.setTitle = function(title) {
    titleInput.clear().sendKeys(title);
  };

  this.setDescription = function(description) {
    descriptionInput.clear().sendKeys(description);
  };

  this.submit = function() {
    submit.click();
  };
};

module.exports = new PostEditPageObject();
