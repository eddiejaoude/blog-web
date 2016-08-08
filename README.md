# Blog Web UI

Angular UI for [Blog API](https://github.com/eddiejaoude/blog-api) 

## Dependencies

* Angular
* Bootstrap v4
* Protractor
* Blog API https://github.com/eddiejaoude/blog-api

## Build & development

* Install UI dependencies `bower install`
* Install node dependencies `npm install`
* Run `grunt serve` for preview
* A browser tab should open with `http://localhost:9000/#/`

## Testing

* Install **Protractor** `npm install -g protractor`
* Update binaries `webdriver-manager update`
* Start **Selenium** `webdriver-manager start`
* Run `protractor test/e2e/protractor.conf.js`

Or a particular test suite `protractor test/e2e/protractor.conf.js --suite tags`
