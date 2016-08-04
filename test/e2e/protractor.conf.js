exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  suites: {
    main: 'main/*Spec.js',
    tags: 'tags/*Spec.js'
  }
};
