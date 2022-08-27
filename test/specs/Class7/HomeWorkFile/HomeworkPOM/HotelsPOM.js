const moment = require("moment");

class HotelsPOM {


// Locators go here 

DateSearchDropDown = $(`//button[@ id ="date_form_field-btn"]`)
dateBackButton = $(`//button[@data-stid="date-picker-paging"][1]`)
augDisabledDateLocator = $$(`//following-sibling::table//button[contains(@class, "is-disabled")]`)




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
    // let dateAndTimeNow = await moment()
    // let formattedDateToday = await dateAndTimeNow.format('DD') 
    let augDisabledDateLocator1 = await this.augDisabledDateLocator
    let lengthOfArray = await augDisabledDateLocator1.length
    return await lengthOfArray
}


} module.exports = HotelsPOM