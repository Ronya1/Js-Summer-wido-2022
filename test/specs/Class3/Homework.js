const { expect } = require("chai");
//const { describe } = require('mocha');

// Due date: Aug 16 eod

/**
 * Tc-1:
 * https://www.darsky.net
 * Verify feelsLikeTempValue is between lowTempValue and highTempValue
 */

/**
 * 1.) open darksky.net
 * 2.) obtain the high temp and store in variable 
 * 3.) obtain the low temp and store in variable 
 * 4.) obtain feels like temp and store it in a variable
 * 5.) verify (to.be.true) that current temp is between high and low 
 * using - Using class attribute
 */

describe('feels Like Temp Is Between Low Temp and High Temp', () => {
    
    it('Verify Temp', async () => {
        
       await browser.url('https://darksky.net/')
       await browser.pause(1000)

       const feelsLike = await $('.feels-like-text').getText();
       const highTemp = await $('.high-temp-text').getText();
       const lowTemp = await $('.low-temp-text').getText();
       //console.log(feelsLike + "Debug")

        expect (feelsLike <= highTemp && feelsLike >= lowTemp, "Working").to.be.true;

    });


});

/**
 * Tc-2:
 * https://www.darsky.net
 * Verify user can get temperature based on zipcode
 * 
 */

/**
 * GIVEN: 
 *      I am on https://www.darsky.net
 * When: 
 *      I locate the zipCode field and I set the value to my zipcode 
 * Then:
 *      I verify I am able to obtain my temp. 
 */

describe('User is able to get their temp', () => {
    
    it.only('ZipCode Temp Check', async() => {
    await browser.url('https://darksky.net/')
    await browser.pause(1000)    

    const searchBar = await  $('input[type=text]'); ;
    await searchBar.setValue('10013');
    await browser.pause(1000) 

    await $('a[class=searchButton]').click();
    await browser.pause(2000) 

    expect

//tagName[@attrName='attrValue']



    });


});




/**
 * Tc-3:
 * https://www.facebook.com
 * 
 * Verify user gets error message when submit empty login form
 * expected error msg -> The email address or mobile number you entered isn't connected to an account.
 * 
 */

/**
 * Tc-4:
 * https://www.facebook.com
 * 
 * Verify empty messenger login flow
 * 1. Click Messenger
 * 2. Verify 'Keep me signed in' is not selected
 * 3. Click 'Log In' button
 * 4. Verify link -> "Find your account and log in" is displayed
 * 5. Verify 'Continue' button is enabled
 * 6. Verify 'Keep me signed in' is not selected
 * 7. Click 'Keep me signed in'
 * 8. Verify 'Keep me signed in' is selected
 * 
 */