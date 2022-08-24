const myHotelFunctions = require('../POM/MyHotelsFunctions/myHotelFunctions')
const { expect } = require('chai');

/**
 * Tc-5:
 * 
 * Verify destination and check-in and check-out dates are as user selected
 * 
 * 1. Launch hotels.com
 * 2. Type "man" in destination
 * 3. Select "Manila" from auto-suggestion
 * 4. Select Sep10 to Sep-25 as check-in and check-out respectively
 * 5. Click Search button
 * 6. Verify destination has Manila
 * 7. Verify check-in date in Sep-10
 * 8. Verify check-out date in Sep-25
 * 
 */

 describe('This is terrible', () => {
 it.only('Hotels.com', async() => {
    const H1 = new myHotelFunctions()
    // await browser.url('https://www.hotels.com')
    // await browser.pause(500)
    await H1.launchHotelsWebsite()

    // let searchBarLocation = await $(`//button[@aria-label="Going to"]`).click()
    // await browser.pause(500)
    // let dropDownSearch = await $(`//input[@placeholder="Going to"]`).setValue('man')
    // await browser.pause(500)
    // let selectManila = await $(`//strong[text()="Manila"]`).click()
    // await browser.pause(500)
    await H1.enterAndSelectDestination('MANI')
    await browser.pause(500)



    //     let dateButtonClick = await $(`//button[@id="date_form_field-btn"]`).click() // clicking on the dates button 
    //     await browser.pause(500)
    //     // Now need to click back to see August 20th 
    //     let dateBackButton = await $(`//button[@data-stid="date-picker-paging"][1]`).click() //Not sure how to do it the other way 
    //     await browser.pause(500)
    //     // How to select 1 date? //h2[text()="August 2022"] ////button[@aria-label="Aug 20, 2022"]
    //     //let fromDateClick = await $(`//button[@aria-label="Aug 20, 2022"]`).click()
    //     const allAugFromDates = await $$(`//h2[text()="August 2022"]/following-sibling::table//button[not(@disabled)]`)
    //     for (const fromDate of allAugFromDates) {
    //         const date = await fromDate.getAttribute('data-day');
    //         if (date.localeCompare("24") === 0) {
    //             await fromDate.click();
    //             break;
    //         }
    //     }
    //  //await H1.selectFromDates()

    //     await browser.pause(500)

    //     const allSeptDates = await $$(`//h2[text()="September 2022"]/following-sibling::table//button[not(@disabled)]`)
    //     for (const fromDate2 of allSeptDates) {
    //         const date2 = await fromDate2.getAttribute('data-day');
    //         if (date2.localeCompare("5") === 0) {
    //             await fromDate2.click();
    //             break;
    //         }
    //     }
    //         await browser.pause(500)
    //         let clickContinueButton = await $(`//button[@class="uitk-button uitk-button-medium uitk-button-has-text uitk-button-primary uitk-layout-flex-item uitk-layout-flex-item-flex-shrink-0 dialog-done"]`).click()
    //         await browser.pause(500)
    //         let clickSearch = await $(`//button[@id="submit_button"]`).click()
    //         await browser.pause(500)

        await H1.selectFromAndToDates(24,5)

            // The below im not sure on 
            let isManilaPresent = await $(`//button[contains(@aria-label, "Going to")]`).getText()
            let ManilPresenet =  isManilaPresent.includes('Manil')
            await browser.pause(500)

            let isAug20Displayed = await $(`//button[@data-name="startDate"]`).getText()
            let Aug20 = isAug20Displayed.includes(24)
            await browser.pause(500)

            let isSep5Displayed = await $(`//button[@data-name="endDate"]`).getText()
            let Sep5 = isSep5Displayed.includes(5)
            await browser.pause(500)

            expect(ManilPresenet, 'Manila is not present').to.be.true 
            expect(Aug20, 'Aug 24 is not present').to.be.true
            expect(Sep5, 'Sep 5 is not present').to.be.true

        
// //button[@data-stid="hotels-destination-menu-trigger"]//span[text()="Going to"]
//span[text()="Going to"
    })
})