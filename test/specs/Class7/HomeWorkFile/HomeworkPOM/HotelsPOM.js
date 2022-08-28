const moment = require("moment");

class HotelsPOM {


// Locators go here 

DateSearchDropDown = $(`//button[@ id ="date_form_field-btn"]`)
dateBackButton = $(`//button[@data-stid="date-picker-paging"][1]`)
augDisabledDateLocator = $$(`//following-sibling::table//button[contains(@class, "is-disabled")]`)

searchBarLocation = $(`//button[@aria-label="Going to"]`)
dropDownSearch = $(`//input[@placeholder="Going to"]`)
selectManila = $(`//strong[text()="Manila"]`)
dateButtonClick = $(`//button[@id="date_form_field-btn"]`)
dateBackButton2 = $(`//button[@data-stid="date-picker-paging"][1]`)
allFromDates_Aug = $$(`//h2[text()="August 2022"]/following-sibling::table//button[not(@disabled)]`)
allToDates_Sept = $$(`//h2[text()="September 2022"]/following-sibling::table//button[not(@disabled)]`)
clickContinueButton1 = $(`//button[@class="uitk-button uitk-button-medium uitk-button-has-text uitk-button-primary uitk-layout-flex-item uitk-layout-flex-item-flex-shrink-0 dialog-done"]`)
searchButtonLocation2 = $(`//button[@aria-label="Search"]`)
GoingToLocator = $(`//button[@aria-label="Going to Manila, National Capital Region, Philippines"]`) //$(`//button[@data-stid="hotels-destination-menu-trigger"]//span[text()="Going to"]`)
startDateLocator = $(`//button[@data-name="startDate"]`)
endDateLocator = $(`//button[@data-name="endDate"]`)


// Functions go here 

async clickDateSearchDropDown(){
    await this.DateSearchDropDown.click()
    await browser.pause(2000)
}
async clickDateBackButton(){
    await this.dateBackButton.click()
    await browser.pause(2000)
}
async RrturnNumOfDisabledDates() {
    let augDisabledDateLocator1 = await $$(`//following-sibling::table//button[contains(@class, "is-disabled")]`).length
    //let lengthOfArray = await this.augDisabledDateLocator1.length
    return await augDisabledDateLocator1
}



async enterDestination(Destination){
    let searchBarLocation = await this.searchBarLocation.click()
    await browser.pause(100)
    let dropDownSearch = await this.dropDownSearch.setValue(Destination)
    await browser.pause(100)
    let selectManila = await this.selectManila.click()
}

async selectTravelDates(){
    let dateButtonClick = await this.dateButtonClick.click() // clicking on the dates button 
    await browser.pause(100)

    let dateBackButton = await this.dateBackButton2.click() //Not sure how to do it the other way 
    await browser.pause(100)
   
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
             await browser.pause(100)
             await fromDate.click();
             break;
         }
        }
         await browser.pause(100)

    const allSeptDates = await $$(`//h2[text()="September 2022"]/following-sibling::table//button[not(@disabled)]`)
        for (const fromDate2 of allSeptDates) {
            const date2 = await fromDate2.getAttribute('data-day');
        if (date2.localeCompare(formattedChecoutDate) === 0) {
            await fromDate2.click();
            break;
        }
    }

    await browser.pause(100)

    await browser.pause(100)
    let clickContinueButton = await this.clickContinueButton1.click()
    await browser.pause(100)
    await $(`//button[@aria-label="Search"]`).click()
    console.log("submit clicked dddddddddddd")
    await browser.pause(100)
}

async isCorrectLocationPresent(){
    let isManilaPresent = await this.GoingToLocator.getText()    //isDisplayed("china") 
    let isManilaPresent1 = await isManilaPresent.includes('Manila')
    console.log(`\n\n Testing Value of ${isManilaPresent}`) 
    await browser.pause(100)
    return await isManilaPresent1
    // This was failing initially b/c I was pulling the wrong locator and 
    //pulled one with the attribute value that includes manila 
}

async isCorrectstartDatePresent(){
    let isAug28Displayed = await this.startDateLocator.getText()     //isDisplayed("28") 
    let isAug28Displayed1 = await isAug28Displayed.includes('28')
    console.log(`\n\n Testing Value of ${isAug28Displayed}`)
    await browser.pause(100)
    return await isAug28Displayed1
}

async isCorrectEndDatePresent(){ // UPDATE THIS ONE LIKE THE ABOVE 
    let isSep1Displayed = await this.endDateLocator.isDisplayed("1") 
    console.log(`\n\n Testing Value of ${isSep1Displayed}`)
    await browser.pause(100)
    return await isSep1Displayed
}


} module.exports = HotelsPOM