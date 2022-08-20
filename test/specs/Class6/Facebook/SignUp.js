const Homepage = require("../POM/Facebook/Homepage");
const SignUpPage = require("../POM/Facebook/SignUpPage");
const moment = require('moment');
const { expect } = require("chai");


describe('Sign Up', () => {
    it('Select Nov 12 1990 as birth date', async () => {

        const hPage = new Homepage();
        const suPage = new SignUpPage();

        /**
         * 1. Launch facebook
         * 2. Click on Create New Account
         * 3. Select month as Nov
         * 4. Select date as 12
         * 5. Select year as 1990
         */
        // 1. Launch facebook
        await browser.url('/');

        // 2. Click on Create New Account
        await hPage.clickCreateNewAccount();

        // 3. Select month as Nov
        // 4. Select date as 12
        // 5. Select year as 1990 
        // await suPage.selectBirthDate('12', 'Nov', '1990');

        await suPage.selectBirthDate('12 nOv 1990');

        await browser.pause(10000);

    });
    });


    describe('Verifying date and time', () => {
        const hPage = new Homepage();
        const sPage = new SignUpPage();


        it('Facebook time', async() => {
            await browser.url('https://www.facebook.com/')
            await browser.pause(2000)
        
            // let clickCreateNewAcct = await $('=Create new account').click();
            // await browser.pause(2000)
        await hPage.clickCreateNewAccount();
        await browser.pause(2000)

            // let dateOnWeb = await $("//select[@aria-label='Day']//option[@selected]").getText()
        const dateOnWeb = await sPage.getSelectedBirthDay()

            const currentDate = moment().date();
            expect(Number(dateOnWeb),  "Current Date is not selected").to.equal(currentDate)

    });
});