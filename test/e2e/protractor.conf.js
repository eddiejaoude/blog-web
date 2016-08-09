exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  suites: {
    posts: 'posts/*Spec.js',
    tags: 'tags/*Spec.js'
  }
};
