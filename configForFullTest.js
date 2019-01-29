var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config={
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs:['fulltest.js'],
    params:
    {
        url: 'http://amasik.com/demo/angularjs/angular-app',
        firstName: 'khadija',
        lastName: 'rasul'
       
    },
   
    onPrepare: function() {
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'target/screenshots'
            })
        );
    }

   
   
}