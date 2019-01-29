describe("Test Plan for loging into fiix",function()
    {
        
            beforeEach(function()
                {
                    
                    browser.waitForAngularEnabled(false);
                    browser.get(browser.params.url);
                    browser.driver.manage().window().maximize();
                    browser.driver.sleep(2000); 
                }
            );

        it("Test case 1: Login",function()
            {
                
                browser.findElement(by.id('j_username')).clear();
                browser.findElement(by.id('j_username')).sendKeys(browser.params.username);
                browser.findElement(by.id('j_password')).clear();
                browser.findElement(by.id('j_password')).sendKeys(browser.params.password);
                browser.findElement(by.className('loginButton')).click();
                browser.driver.sleep(5000);
                browser.findElement(by.className('pk-icon-maintenance')).click();
                browser.driver.sleep(5000);
                browser.findElement(by.id('contextButtonNew')).click();
                browser.driver.sleep(5000);
                browser.findElement(by.id('contextButtonNew')).click();
                browser.findElement(by.xpath('//p[contains(text(),"(No Site)")]')).click();
                browser.driver.sleep(5000);
                
            }
        );
    }
);