
import {browser,by,element} from 'protractor';
describe("This is calculator Test Case",function(){


    beforeEach(function(){
        console.log("inside before each");
        browser.get("http://juliemr.github.io/protractor-demo/");
    })

    it("Add two numbers",function(){
        console.log("inside first test");
        element(by.model("first")).sendKeys("2");
        element(by.model("second")).sendKeys("6");
        element(by.id("gobutton")).click();
        browser.sleep(3000);
        let addition=element(by.className("ng-binding"));
        expect<any>(addition.getText()).toEqual('8');
        
    })

    it("Subtract two numbers",function(){
        console.log("inside second test");
        element(by.model("first")).sendKeys("10");
        element(by.model("operator")).element(by.css("option[value='SUBTRACTION']")).click();
        element(by.model("second")).sendKeys("4");
        element(by.id("gobutton")).click();
        browser.sleep(3000);
        let subtraction=element(by.className("ng-binding"));
        expect<any>(subtraction.getText()).toEqual('6');
    })


    it("Multiply two numbers",function(){
        console.log("inside third test");
        element(by.model("first")).sendKeys("10");
        element.all(by.options('value for (key, value) in operators')).get(3).click();
        element(by.model("second")).sendKeys("4");
        element(by.id("gobutton")).click();
        browser.sleep(3000);
        let multiplication=element(by.className("ng-binding"));
        expect<any>(multiplication.getText()).toEqual('40');
    })

    it("Divide two numbers",function(){
        console.log("inside third test");
        element(by.model("first")).sendKeys("12");
        element(by.cssContainingText('option','/')).click();
        element(by.model("second")).sendKeys("4");
        element(by.id("gobutton")).click();
        browser.sleep(3000);
        let division=element(by.className("ng-binding"));
        expect<any>(division.getText()).toEqual('3');
    })



})