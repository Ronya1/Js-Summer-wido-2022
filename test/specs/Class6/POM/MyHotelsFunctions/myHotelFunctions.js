
class myHotelFunctions {

hotelsDomain = 'https://www.hotels.com'
searchBarLocator = $(`//button[@aria-label="Going to"]`)
dropDownSearchLocator = $(`//input[@placeholder="Going to"]`)
ManilaOption = $(`//strong[text()="Manila"]`)

fromDAteButtonLocator = $(`//button[@id="date_form_field-btn"]`)
dateBackButtonLocator = $(`//button[@data-stid="date-picker-paging"][1]`)
// selectingAFromDate = $(`//button[@aria-label="Aug 20, 2022"]`)
allAugustAvailableDatesLocator = $$(`//h2[text()="August 2022"]/following-sibling::table//button[not(@disabled)]`)
allSeptAvailableDAtesLocator = $$(`//h2[text()="September 2022"]/following-sibling::table//button[not(@disabled)]`)

// await browser.url('https://www.hotels.com')
// await browser.pause(500)

async launchHotelsWebsite(){
    await browser.url(`https://www.hotels.com`)
    await browser.maximizeWindow()
}

// async launchFB(){
//     await browser.url('https://www.facebook.com/')//url should go on top with locators
//     await browser.pause(2000)
// }


// let searchBarLocation = await $(`//button[@aria-label="Going to"]`).click()
// await browser.pause(500)
// let dropDownSearch = await $(`//input[@placeholder="Going to"]`).setValue('man')
// await browser.pause(500)
// let selectManila = await $(`//strong[text()="Manila"]`).click()
// await browser.pause(500)

async enterAndSelectDestination(Destination){
    let properDestination = Destination.toLowerCase()
    await browser.pause(500)
    await this.searchBarLocator.click()
    await browser.pause(500)
    await this.dropDownSearchLocator.setValue(properDestination)
    await browser.pause(500)
    await this.ManilaOption.click()
}

// let dateButtonClick = await $(`//button[@id="date_form_field-btn"]`).click() // clicking on the dates button 
// await browser.pause(500)
// // Now need to click back to see August 20th 
// let dateBackButton = await $(`//button[@data-stid="date-picker-paging"][1]`).click() //Not sure how to do it the other way 
// await browser.pause(500)
// // How to select 1 date? //h2[text()="August 2022"] ////button[@aria-label="Aug 20, 2022"]
// //let fromDateClick = await $(`//button[@aria-label="Aug 20, 2022"]`).click()
// const allAugFromDates = await $$(`//h2[text()="August 2022"]/following-sibling::table//button[not(@disabled)]`)
// for (const fromDate of allAugFromDates) {
//     const date = await fromDate.getAttribute('data-day');
//     if (date.localeCompare("20") === 0) {
//         await fromDate.click();
//         break;
//     }
// }

// async selectFromDates(dateSelected){
//     await this.fromDAteButtonLocator.click()
//     await browser.pause(500)
//     await this.dateBackButtonLocator.click()
//     await browser.pause(500)
//     const allAugFromDates = await this.allAugustAvailableDatesLocator
//     await browser.pause(500)
//     for (const fromDate of allAugFromDates) {
//         const date = await fromDate.getAttribute('data-day');
//         if (date.localeCompare(dateSelected) === 0) {
//             await fromDate.click();
//             break;
//         }
//         browser.pause(2000)
// }
// }

async selectFromDates(){
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
}

// async selectFromDates(dateSelected){
//     await this.fromDAteButtonLocator.click()
//     await browser.pause(500)
//     await this.dateBackButtonLocator.click()
//     await browser.pause(500)
//     const allAugFromDates = await this.allAugustAvailableDatesLocator
//     await browser.pause(500)
//     for (const fromDate of allAugFromDates) {
//         const date = await fromDate.getAttribute('data-day');
//         if (date.localeCompare(dateSelected) === 0) {
//             await fromDate.click();
//             break;
//         }
//         browser.pause(2000)
// }
// }

async selectFromAndToDates(){
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
    }

async selectFromAndToDates(num1, num2){
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
            if (date.localeCompare(num1) === 0) {
                await fromDate.click();
                break;
            }
        }

        const allSeptDates = await $$(`//h2[text()="September 2022"]/following-sibling::table//button[not(@disabled)]`)
        for (const fromDate2 of allSeptDates) {
            const date2 = await fromDate2.getAttribute('data-day');
            if (date2.localeCompare(num2) === 0) {
                await fromDate2.click();
                break;
            }
        }
            await browser.pause(500)
            let clickContinueButton = await $(`//button[@class="uitk-button uitk-button-medium uitk-button-has-text uitk-button-primary uitk-layout-flex-item uitk-layout-flex-item-flex-shrink-0 dialog-done"]`).click()
            await browser.pause(500)
            let clickSearch = await $(`(//button[@type="submit"])[1]`).click()
            await browser.pause(500)


//  // The below im not sure on 
//  let isManilaPresent = await $(`//button[@data-stid="hotels-destination-menu-trigger"]//span[text()="Going to"]`).isDisplayed('Manila') 
//  await browser.pause(500)

//  let isAug20Displayed = await $(`//button[@data-name="startDate"]`).getText()
//  let Aug20 = isAug20Displayed.includes(24)
//  await browser.pause(500)

//  let isSep5Displayed = await $(`//button[@data-name="endDate"]`).getText()
//  let Sep5 = isSep5Displayed.includes(5)
//  await browser.pause(500)

 


}

}
module.exports = myHotelFunctions;