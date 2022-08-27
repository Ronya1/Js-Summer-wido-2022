class HotelsPOM {


// Locators go here 

DateSearchDropDown = $(`//button[@ id ="date_form_field-btn"]`)
dateBackButton = `//button[@data-stid="date-picker-paging"][1]`
augDisabledDateLocator = `//following-sibling::table//button[contains(@class, "is-disabled")]`




// Functions go here 

async clickDateSearchDropDown(){
    await this.DateSearchDropDown.click()
    await browser.pause(2000)
}


    //    let DateSearchDropDown = await $(`//button[@ id ="date_form_field-btn"]`).click()
    //    await browser.pause(2000)




} module.exports = HotelsPOM