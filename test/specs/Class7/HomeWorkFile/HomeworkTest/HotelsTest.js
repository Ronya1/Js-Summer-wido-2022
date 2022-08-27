
const { expect } = require("chai");
const moment = require("moment");
const HotelsPOM = require("../../../Class7/HomeWorkFile/HomeworkPOM/HotelsPOM");
/**
 * Tc-1:
 * 
 * hotels.com
 * Verify past dates of the current month is not enabled
 */

describe('Hotels Test', () => {
    it.only('Verify past dates of the current month is not enabled', async() => {
        const hotel = new HotelsPOM()

        // const suPage = new SignUpPage();

       await browser.url('https://www.hotels.com/')
       await browser.pause(2000)
    //    let DateSearchDropDown = await $(`//button[@ id ="date_form_field-btn"]`).click()
    //    await browser.pause(2000)
        await hotel.clickDateSearchDropDown()


       // Now need to click back to see August 20th 
    //    let dateBackButton = await $(`//button[@data-stid="date-picker-paging"][1]`).click() //Not sure how to do it the other way 
    //    await browser.pause(500)
        await hotel.clickDateBackButton()

        let dateAndTimeNow = await moment()
        console.log(`\n\n TESTING AAAAA ${dateAndTimeNow}`);
        let formattedDateToday = await dateAndTimeNow.format('DD')  
        console.log(`\n\n TESTING DDDDD ${formattedDateToday}`);
       let augDisabledDateLocator = await $$(`//following-sibling::table//button[contains(@class, "is-disabled")]`)
       let lengthOfArray = augDisabledDateLocator.length

        // let thisREsult = await hotel.RrturnNumOfDisabledDates()
        // console.log(`/n/n CCCCCCC ${thisREsult}`);

        expect(lengthOfArray, 'Length of Disabled Dates is Off').to.equal(formattedDateToday-1)


       //expect(augDisabledDateLocator)
    });



    

    // * Tc-2:
    // * 
    // * Verify destination and check-in and check-out dates are as user selected
    // * 
    // * 1. Launch hotels.com
    // * 2. Type "man" in destination
    // * 3. Select "Manila" from auto-suggestion

    // * 4. Select tomorrow's date as check-in date (Aug-28)
    // * 5. Select 5 days from check-in as check-out (Aug-31)
    // * 5. Click Search button
    // * 6. Verify destination has Manila
    // * 7. Verify check-in date is tomorrow's date
    // * 8. Verify check-out date in 5-days from check-in date

    it('Verify destination and check-in and check-out dates are as user selected', async() => {
        await browser.url('https://www.hotels.com')
        await browser.pause(500)
        let searchBarLocation = await $(`//button[@aria-label="Going to"]`).click()
        await browser.pause(500)
        let dropDownSearch = await $(`//input[@placeholder="Going to"]`).setValue('man')
        await browser.pause(500)
        let selectManila = await $(`//strong[text()="Manila"]`).click()
        await browser.pause(500)
        let dateButtonClick = await $(`//button[@id="date_form_field-btn"]`).click() // clicking on the dates button 
        await browser.pause(500)
        // The above is good now the below part 

        let dateBackButton = await $(`//button[@data-stid="date-picker-paging"][1]`).click() //Not sure how to do it the other way 
        await browser.pause(500)
        //let augDisabledDateLocator = await $$(`//following-sibling::table//button[contains(@class, "is-disabled")]`).getText()
        //let augDisabledDateLocator = await $$(`//following-sibling::table//button[contains(@class, "is-disabled")]`).getText()

        const allAugFromDates = await $$(`//h2[text()="August 2022"]/following-sibling::table//button[not(@disabled)]`)
            let dateAndTimeNow = await moment() // storing current date 
            let dateAndTimeTomorrow = await moment().add(1,'days') // Storing tomorrows date 
            let formattedTomorrowsDate = await dateAndTimeTomorrow.format('DD')       //moment().month(MMMM).year(YYYY)
            let checkOutDate = await moment().add(5,'days') 
            let formattedChecoutDate = await checkOutDate.format('D')
            await console.log(`\n\n Testing DDDDDDDD ${formattedChecoutDate}`);

            for (const fromDate of allAugFromDates) {
                 const date = await fromDate.getAttribute('data-day');
             if (date.localeCompare(formattedTomorrowsDate) === 0) {
                 await browser.pause(2000)
                 await fromDate.click();
                 break;
             }
            }
             await browser.pause(500)

        const allSeptDates = await $$(`//h2[text()="September 2022"]/following-sibling::table//button[not(@disabled)]`)
            for (const fromDate2 of allSeptDates) {
                const date2 = await fromDate2.getAttribute('data-day');
            if (date2.localeCompare(formattedChecoutDate) === 0) {
                await fromDate2.click();
                break;
            }
        }
        await browser.pause(2000)

        await browser.pause(500)
        let clickContinueButton = await $(`//button[@class="uitk-button uitk-button-medium uitk-button-has-text uitk-button-primary uitk-layout-flex-item uitk-layout-flex-item-flex-shrink-0 dialog-done"]`).click()
        await browser.pause(500)
        await $(`//button[@aria-label="Search"]`).click()
        console.log("submit clicked dddddddddddd")
        await browser.pause(500)

        // The below im not sure on 
        let isManilaPresent = await $(`//button[@data-stid="hotels-destination-menu-trigger"]//span[text()="Going to"]`).isDisplayed('Manila') 
        console.log(`\n\n Testing Value of ${isManilaPresent}`)
        await browser.pause(500)

        let isAug28Displayed = await $(`//button[@data-name="startDate"]`).isDisplayed("28") 
        console.log(`\n\n Testing Value of ${isAug28Displayed}`)
        await browser.pause(500)

        let isSep1Displayed = await $(`//button[@data-name="endDate"]`).isDisplayed("1") 
        console.log(`\n\n Testing Value of ${isSep1Displayed}`)
        await browser.pause(500)

        expect(isManilaPresent, 'Manila is not present').to.be.true 
        expect(isAug28Displayed, 'Aug 20 is not present').to.be.true
        expect(isSep1Displayed, 'Sep 5 is not present').to.be.true
            
})
});