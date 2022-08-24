const Commands = require("../Commands");
//const Commands = require("../Commands");


class MyDarkSkyFunctions {

    Commands = new Commands();

    // Locators for Web-elements on home page 
    WebsiteDomain = 'https://darksky.net/'
    feelsLikeTextLocator = $('.feels-like-text')
    highTempTextLocator = $('.high-temp-text')
    lowTempTempTextLocator = $('.low-temp-text')
    searchBarLocation = $('input[type=text]')
    searchButtonLocation =  $('a[class=searchButton]')


// FUNCTION ARE BELOW: 
    async launchDarkSkyNet(){
        await browser.url(this.WebsiteDomain)
        await browser.pause(1000)
    }

    async getHighTempValue(){
        const temp = await (this.highTempTextLocator).getText();
        return temp.substring(0,temp.length-1);;
    }

    async getLowTempValue(){
        const temp = await (this.lowTempTempTextLocator).getText();
        return temp.substring(0,temp.length-1);;
    }

    async getFeelsLikeTempValue(){
        const temp = await (this.feelsLikeTextLocator).getText();
        return temp.substring(0,temp.length-1);
    }

    async enterValueInSearchBar(zipcode){
        await (this.searchBarLocation).setValue(zipcode)
        //await this.Commands.clickWebElement(this.searchButtonLocation)
        await (this.searchButtonLocation).click()
    }


    // const searchBar = await  $('input[type=text]'); ;
    // await searchBar.setValue('10013');
    // await browser.pause(1000) 









}
module.exports = MyDarkSkyFunctions;