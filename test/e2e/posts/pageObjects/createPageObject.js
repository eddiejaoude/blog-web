var PostCreatePageObject = function () {
  var titleInput = element(by.css('form.postCreate input#title'));
  var descriptionInput = element(by.css('form.postCreate input#description'));
  var tagsInput = element(by.css('form.postCreate select#tags'));
  var submit = element(by.css('form.postCreate button'));

  this.get = function () {
    browser.get('http://localhost:9000/#/posts/create');
  };

  this.setTitle = function(title) {
    titleInput.clear().sendKeys(title);
  };

  this.setDescription = function(description) {
    descriptionInput.clear().sendKeys(description);
  };

  this.setTags = function(tags) {
    tags.forEach(function(tag) {
      tagsInput.sendKeys(tag);
    });
  };

  this.submit = function() {
    submit.click();
  };
};

module.exports = new PostCreatePageObject();
