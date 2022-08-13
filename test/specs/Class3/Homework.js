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
    
    it.only('Verify Temp', async () => {
        
       await browser.url('https://darksky.net/')
       await browser.pause(1000)

       const feelsLike = await $('.feels-like-text').getText();
       const highTemp = await $('.high-temp-text').getText();
       const lowTemp = await $('.low-temp-text').getText();
       //console.log(feelsLike + "Debug")

       // Need to convert the number to a degree 
       const feelsLikeNoDegree = feelsLike.substring(0,feelsLike.length-1)
       const highTempNoDegree = highTemp.substring(0,highTemp.length-1)
       const lowTempNoDegree = lowTemp.substring(0,lowTemp.length-1)

        //expect (feelsLike <= highTemp && feelsLike >= lowTemp, "Working").to.be.true;

        // The below is all working and removing the degree with a dynamic length. 
        console.log('number Debug')
        console.log(`\nfeelsLikeNoDegree ${feelsLikeNoDegree}`) 
        console.log(`\nhighTempNoDegree ${highTempNoDegree}`)
        console.log(`\nlowTempNoDegree ${lowTempNoDegree}`)

    });// Convert the degree into a number use substring (use dynamic length) - Exclude the Degree sign 


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
 * //tagName[@attrName='attrValue']
 */

describe('User is able to get their temp', () => {
    
    it('ZipCode Temp Check', async() => {
    await browser.url('https://darksky.net/')
    await browser.pause(1000)    

    const searchBar = await  $('input[type=text]'); ;
    await searchBar.setValue('10013');
    await browser.pause(1000) 

    await $('a[class=searchButton]').click(); //tagName[@attrName='attrValue']
    await browser.pause(2000) 

    // confirm state is NY 
    // expect - what to put here? should it be true that they can get it how would you verify that? 

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
 * GIVEN: 
 *      I am on facebook.com 
 * WHEN: 
 *      I locate the submit button and press enter 
 * VERIFY: 
 *      User gets error message = to ______
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