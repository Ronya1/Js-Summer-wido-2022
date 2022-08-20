

// Due - Aug 19 (Friday eod)
/**
 * 
 * Launch darksky.net
 * Get all the timeline data in an array
 * then print array in the console.
 */

const { expect } = require("chai");

// The below code works but I get double the values why??
describe('Get all timeline data', () => {
  it.only('Get all Day Data', async () => {
    await browser.url('https://darksky.net/')
    await browser.pause(2000)

    let scroleIntoView = await $('div[class=scroll-container]').scrollIntoView();  
    await browser.pause(2000)

    let allTimeValues = await $$(`//*[@class='hours']`) //*[@class='scroll-container']//*[@class='hours']`
    //console.log(`testing list ${myList}`);

    for (const printTimes of allTimeValues) {
        console.log(await printTimes.getText());
        break;
    }
// Print way to print length and confirm you get 12 
  })  




/**
 * Verify destination and check-in/ and check-out dates are as user selected
 * 
 * 1. Launch hotels.com
 * 2. Type "man" in destination
 * 3. Select "Manila" from auto-suggestion
 * 4. Select Aug 20 to Sep-5 as check-in and check-out respectively
 * 5. Click Search button
 * 6. Verify destination has Manila
 * 7. Verify check-in date in Aug-20
 * 8. Verify check-out date in Sep-5
 * 
 */

/**
 * HOW TO SOLVE THIS?
 * 1.) launch hotels.com 
 * 2.) locate search bar and sype in Man
 * 3.) select the auto suggestion that states Manila 
 * 4.) locate the date drop down and click 
 * 5.) locate August 20th 
 * 6.) then do the same process for checkout Sept-5th 
 * 7.) locate and click search 
 * 8.) Locate and get text for Manila Verify it states Manila 
 * 9.) verify dates iclude aug-20 and sep-5
 */


   
    it('Hotels.com', async() => {
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
        // Now need to click back to see August 20th 
        let dateBackButton = await $(`//button[@data-stid="date-picker-paging"][1]`).click() //Not sure how to do it the other way 
        await browser.pause(500)
        // How to select 1 date? //h2[text()="August 2022"] ////button[@aria-label="Aug 20, 2022"]
        //let fromDateClick = await $(`//button[@aria-label="Aug 20, 2022"]`).click()
        const allAugFromDates = await $$(`//h2[text()="August 2022"]/following-sibling::table//button[not(@disabled)]`)
        for (const fromDate of allAugFromDates) {
            const date = await fromDate.getAttribute('data-day');
            if (date.localeCompare("20") === 0) {
                await fromDate.click();
                break;
            }
        }
        await browser.pause(500)

        const allSeptDates = await $$(`//h2[text()="September 2022"]/following-sibling::table//button[not(@disabled)]`)
        for (const fromDate2 of allSeptDates) {
            const date2 = await fromDate2.getAttribute('data-day');
            if (date2.localeCompare("5") === 0) {
                await fromDate2.click();
                break;
            }
        }
            await browser.pause(500)
            let clickContinueButton = await $(`//button[@class="uitk-button uitk-button-medium uitk-button-has-text uitk-button-primary uitk-layout-flex-item uitk-layout-flex-item-flex-shrink-0 dialog-done"]`).click()
            await browser.pause(500)
            let clickSearch = await $(`//button[@id="submit_button"]`).click()
            console.log("submit clicked dddddddddddd")
            await browser.pause(500)

            // The below im not sure on 
            let isManilaPresent = await $(`//button[@data-stid="hotels-destination-menu-trigger"]//span[text()="Going to"]`).isDisplayed('Manila') 
            console.log(`\n\n Testing Value of ${isManilaPresent}`)
            await browser.pause(500)

            let isAug20Displayed = await $(`//button[@data-name="startDate"]`).isDisplayed("20") 
            console.log(`\n\n Testing Value of ${isAug20Displayed}`)
            await browser.pause(500)

            let isSep5Displayed = await $(`//button[@data-name="endDate"]`).isDisplayed("5") 
            console.log(`\n\n Testing Value of ${isSep5Displayed}`)
            await browser.pause(500)

            expect(isManilaPresent, 'Manila is not present').to.be.true 
            expect(isAug20Displayed, 'Aug 20 is not present').to.be.true
            expect(isSep5Displayed, 'Sep 5 is not present').to.be.true

        
// //button[@data-stid="hotels-destination-menu-trigger"]//span[text()="Going to"]
//span[text()="Going to"

        

        // const allAugDateElements = await $$('//h2[text()="August 2022"]/following-sibling::table//button[not(@disabled)]');
        // for (const dateElement of allAugDateElements) {
        //     const date = await dateElement.getAttribute('data-day');
        //     if (date.localeCompare("20") === 0) {
        //         await dateElement.click();
        //         break;
        //     }
        // }

})

});