/**
 * **
 * Verify current Date is displayed on Sign up page
 *
 *  date = current date
 *  year = current year
 * 
 */
//const moment = require ("moment")
const { expect } = require("chai");
const moment = require("moment");


describe('Verifying date and time', () => {
    it('Facebook time', async() => {
        await browser.url('https://www.facebook.com/')
        await browser.pause(2000)

        let clickCreateNewAcct = await $('=Create new account').click();
        await browser.pause(2000)

        let dateOnWeb = await $("//select[@aria-label='Day']//option[@selected]").getText()

        const currentDate = moment().date();
        expect(Number(dateOnWeb),  "Current Date is not selected").to.equal(currentDate)



        // const now = moment();

        // console.log(`\n\n now -> ${now.format{}}\n\n`);

        describe('Practice moments', () => {
            it.only('Verify current is Selected in Time Machine calendar', async () => {
                await browser.url('https://www.darksky.net/');
                await browser.pause(3000);
        
                // await $('=TIME MACHINE').scrollIntoView();
                await $('=TIME MACHINE').click();
                await browser.pause(10000);

            let currentDatePull = await $(`//td[@class="is-today"]//button`).getText()
            await browser.pause(2000);
            
            const currentDate = moment().date()

            expect(Number(currentDate), "Date Not As Expected").to.equal(currentDate)

            console.log(`\n\n checkin date ${currentDatePull}`);
                
            })
        });




    });
});