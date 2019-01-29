describe("Full test",function(){
    beforeEach(function(){
        browser.get(browser.params.url);
        browser.driver.manage().window().maximize();
        browser.driver.sleep(2000); 

    });
    it("test case 1: registration",function(){
        browser.findElement(by.partialLinkText('Don\'t have an account?')).click();
       // browser.findElement(by.name('firstname')).clear();
        browser.findElement(by.name('firstname')).sendKeys(browser.params.firstName);
      //  browser.findElement(by.name('lastname')).clear();
        browser.findElement(by.name('lastname')).sendKeys(browser.params.lastName);
      //  browser.findElement(by.name('email')).clear();
        browser.findElement(by.name('email')).sendKeys('khadija@rasul.com');
     //   browser.findElement(by.name('password')).clear();
        browser.findElement(by.name('password')).sendKeys('abc123');
     //   browser.findElement(by.name('confirm_password')).clear();
        browser.findElement(by.name('confirm_password')).sendKeys('abc123');
        browser.findElement(by.name('confirm_password')).sendKeys('abc123');
        browser.findElement(by.buttonText('Register')).click();
        browser.driver.sleep(5000);
        //browser.findElement(by.partialLinkText('Login to your account')).click();
        browser.driver.sleep(2000);

    });


    it("test case 2: login",function(){
        browser.driver.sleep(2000);
        browser.findElement(by.name('email')).clear();
        browser.findElement(by.name('email')).sendKeys('khadija@rasul.com');
        browser.driver.sleep(2000);
       browser.findElement(by.name('password')).clear();
        browser.findElement(by.name('password')).sendKeys('abc123');
        browser.findElement(by.buttonText('Sign In')).click();
        browser.driver.sleep(5000);
        //browser.findElement(by.partialLinkText('Login to your account')).click();
        browser.driver.sleep(2000);

    });
    
});