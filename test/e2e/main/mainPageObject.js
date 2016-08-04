var MainPageObject = function () {
  var postList = element.all(by.css('.blogs .card'));

  this.get = function () {
    browser.get('http://localhost:9000/#/');
  };

  this.getPosts = function () {
    return postList;
  };
};

module.exports = new MainPageObject();
