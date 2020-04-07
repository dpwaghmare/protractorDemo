exports.config = {
    framework: 'jasmine', //Type of Framework used 
    directConnect:true, 
    specs: ['home-spec.ts'], //Name of the Specfile 

   onPrepare() { 
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(4000)
        
          require('ts-node').register({ 
          project: require('path').join(__dirname, '/../tsconfig.json') // Relative path of tsconfig.json file 
        });
    } 
}