exports.config={
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs:['loginFiix.js'],
    params:
    {
        url: 'https://codered.fiixstg.com',
        username: 'khadija',
        password: 'cmms123'
    }
   
   
   
}