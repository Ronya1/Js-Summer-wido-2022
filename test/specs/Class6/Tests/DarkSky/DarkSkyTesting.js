// THIS PAGE IS ONLY FOR EXECUTION OF THE TEST CASE YOUR GOAL IS TO REVISE IT USING POM AND CONDENSE THE CODE 
const { expect } = require('chai');
const DarkSkyFunctions = require('../../POM/DarkSky/DarkSkyFunctions')

/**
 * Complete the automation using POM design
 */

/**
 * Tc-1:
 * https://www.darsky.net
 * Verify feelsLikeTempValue is between lowTempValue and highTempValue
 */

 describe('feels Like Temp Is Between Low Temp and High Temp', () => {
    
    it('Verify Temp', async () => {

        // created this to to access the class 
       const dSky = new DarkSkyFunctions();

    //    await browser.url('https://darksky.net/')
    //    await browser.pause(1000) 
          dSky.launchDarkSkyNet()

       //const feelsLike = await $('.feels-like-text').getText();
       //const highTemp = await $('.high-temp-text').getText();
       // const lowTemp = await $('.low-temp-text').getText();
       const highTemp = await dSky.getHighTempValue()
       const lowTemp = await dSky.getLowTempValue()
       const feelsLike = await dSky.getFeelsLikeTempValue()


    //    Need to convert the degree to a number 
    //    const feelsLikeNoDegree = feelsLike.substring(0,feelsLike.length-1)
    //    const highTempNoDegree = highTemp.substring(0,highTemp.length-1)
    //    const lowTempNoDegree = lowTemp.substring(0,lowTemp.length-1)

        expect (feelsLike <= highTemp && feelsLike >= lowTemp, "Working").to.be.true;

    });// Convert the degree into a number use substring (use dynamic length) - Exclude the Degree sign 

});

/**
 * Tc-2:
 * https://www.darsky.net
 * Verify user can get temperature based on zipcode
 * 
 */


 describe('User is able to get their temp', () => {
    
    it.only('ZipCode Temp Check', async() => {
    const dSky = new DarkSkyFunctions();

    // await browser.url('https://darksky.net/')
    // await browser.pause(1000)    
    dSky.launchDarkSkyNet()

    // const searchBar = await  $('input[type=text]'); ;
    // await searchBar.setValue('10013');
    // await browser.pause(1000) 
        // await $('a[class=searchButton]').click(); //tagName[@attrName='attrValue']
    await browser.pause(5000) 
    dSky.enterValueInSearchBar(90210)
    await browser.pause(5000)

    });


});



