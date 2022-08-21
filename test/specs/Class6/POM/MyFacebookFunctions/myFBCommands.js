
class myFBCommands {

// Is an Element Selected 
// scroll something into view 
// click something
// is something displayed
// is something enabled 

async findWebElement(locator) {
    return await locator;
}

// async clickElement(locator){
//     await this.locator.click()
// }

async clickWebElement(locator) {
    const element = await this.findWebElement(locator);
    await element.click();
}




}
module.exports = myFBCommands