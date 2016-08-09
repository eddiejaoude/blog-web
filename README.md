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

Example output

```
$ protractor test/e2e/protractor.conf.js
              
[12:22:13] I/hosted - Using the selenium server at http://localhost:4444/wd/hub
[12:22:13] I/launcher - Running 1 instances of WebDriver
Started
...............................


31 specs, 0 failures
Finished in 32.153 seconds

```

## Future considerations

* Parse API validation errors 
