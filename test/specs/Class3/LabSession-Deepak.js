const { expect } = require("chai");
        
        /**
         * 1. Launch https://classroomessentialsonline.com/
         * 2. Click on Church Chairs options
         * 3. Verify Church Chairs heading is displayed
         * 
         */


        describe('verify church Chair', () => {
            
            it('Verify Chair', async () => {
                await browser.url('https://www.classroomessentialsonline.com/')
                await browser.pause(1000)

                //const webElement = $('a[href=/church-chairs/]').click();
                const webElement = $('=CHURCH CHAIRS').click(); 
                await browser.pause(2000)
                const heading =$('h1');
                const isHeadingDisplayed = heading.isDisplayed()
                expect(isHeadingDisplayed, 'Church Chairs Heading is NOT displayed').to.be.true
                expect(churchChairsHeading.toUpperCase(), 'Church Chairs is displayed').to.be.equal('cHurCh chAIrs'.toUpperCase());



                const actChurchChairsHeading = heading.getText();
                const isHeadingAsExpected = actChurchChairsHeading.toUpperCase().localCompare('church Chairs'.toUpperCase()) === 0
                expect(isHeadingAsExpected && isHeadingDisplayed, 'Church Chairs Heading is NOT displayed').to.be.true;

                expect(churchChairsHeading.toUpperCase(), 'Church Chairs is displayed').to.be.equal('cHurCh chAIrs'.toUpperCase());
                await browser.pause(2000)



// RE-Write the above code 
// //a[@href='/church-chairs/']
// Use link text mthod here. 


            });


            it.only('Verify Link if user submits empty login form ', async () => {
                await browser.url('https://www.facebook.com/')
                browser.pause(2000)
                const clickOnLoginBtn = $('button[name=login]').click(); 
                await browser.pause(5000)
                const findAcctLink = await $('a*=Find your account').isDisplayed();
                expect(findAcctLink, 'Not displayed').to.be.false


            });


        });