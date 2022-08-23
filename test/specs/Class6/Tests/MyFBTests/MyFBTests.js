const myFBFunctions = require('../../POM/MyFacebookFunctions/myFBFunctions')
const { expect } = require('chai');



































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

 describe('Verify empty messenger login flow', () => {

    it.only('Empty Login Flow 1', async() => {
        const FB = new myFBFunctions();
        // await browser.url('https://www.facebook.com/') // goes to FB.com 
        // await browser.maximizeWindow()
        // await browser.pause(1000)
        // messengerLink = await $('a[title*=Messenger]').click(); // finds and clicks messenger 
        // await browser.pause(1000)

        await FB.launchFBMessenger()
        //await browser.pause(2000)

        //messengerNotSelected = await $('div[class*=Label]').isSelected(); //confirms messenger is not selected (false value)
        let isMessengerSelected = await FB.ismessengerKeepMeSignedInSelected()
        //await browser.pause(2000)
        expect(isMessengerSelected, "Keep Me Signed In Is Selected").to.be.false // verifies the above to be false 

        // clickKeepMeSignedIn = await $('.uiInputLabelLabel'); // Finds and clicks login button
        // await clickKeepMeSignedIn.scrollIntoView()
        // await clickKeepMeSignedIn.click()
        // await browser.pause(1000)
        await FB.clickKeepMeSignedIn()
        await browser.pause(2000)


        // messengerPageLoginBtn = await $('#loginbutton'); // Finds and clicks login button
        // await messengerPageLoginBtn.scrollIntoView()
        // await messengerPageLoginBtn.click()
        // await browser.pause(1000)
        FB.clickLoginButton()
        await browser.pause(5000)

        //  I verify Find your account and log in" is displayed 
        // MessengerPageLink = await browser.getUrl() // got new url for the redirect
        // await browser.pause(2000)
        let newUrlLinkMessengerRedirect = await FB.getNewUrl()
        console.log(`\n\n Testing Return URL ${newUrlLinkMessengerRedirect}`);

        // isFindYourAcctPresent = await $('*=Find your account').isDisplayed(); // verifies that 'Find your account and log in" is displayed'
        // await browser.pause(2000)
        let accountPresent = await FB.isFindyourAccountPresent()
        expect(accountPresent, "Find Your Account is NOT Present").to.be.true

        //isContinueEnabled = await $('#loginbutton').isEnabled(); // Verifies 'Continue' button is enabled
        let isContinueEnabledOnRedirect = await FB.isContinueenabeled()
        expect(isContinueEnabledOnRedirect, "Continue Is Not Enabled").to.be.true

        // isCheckBoxSelected2 = await $('input[type*=checkbox]').isSelected(); // I verify 'Keep me signed in' is not selected 
        isCheckBoxSelected2 = await FB.isKeepMySignedInOnRedirectSelected()
        expect(isCheckBoxSelected2, "Check Box Is Not Selected").to.be.false

        //  I Click 'Keep me signed in'
        //clickKeepMeSignedIn = await $('input[type*=checkbox]').click() // Stating not clickable at this point 
        // clickKeepMeSignedIn2 = await $('.uiInputLabelLabel'); // Finds and clicks login button
        // await clickKeepMeSignedIn2.scrollIntoView()
        // await clickKeepMeSignedIn2.click()
        // await browser.pause(1000)
        await FB.clickKeepMeSignedInOnRedirect()



        //await browser.pause(1000)
        // I verify 'Keep me signed in' is selected -> cant do this either as I cant click the button 
        //console.log(`\nChecking 2nd checkbox Value ${isCheckBoxSelected2}`);


    });
    
});


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


it('Hotels.com', async() => {
    await browser.url('https://www.hotels.com')
    await browser.pause(500)
    let searchBarLocation = await $(`//button[@aria-label="Going to"]`).click()
    await browser.pause(500)
    let dropDownSearch = await $(`//input[@placeholder="Going to"]`).setValue('man')
    await browser.pause(500)
    let selectManila = await $(`//strong[text()="Manila"]`).click()
    await browser.pause(500)
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
    await browser.pause(500)

    const allSeptDates = await $$(`//h2[text()="September 2022"]/following-sibling::table//button[not(@disabled)]`)
    for (const fromDate2 of allSeptDates) {
        const date2 = await fromDate2.getAttribute('data-day');
        if (date2.localeCompare("5") === 0) {
            await fromDate2.click();
            break;
        }
    }
        await browser.pause(500)
        let clickContinueButton = await $(`//button[@class="uitk-button uitk-button-medium uitk-button-has-text uitk-button-primary uitk-layout-flex-item uitk-layout-flex-item-flex-shrink-0 dialog-done"]`).click()
        await browser.pause(500)
        let clickSearch = await $(`//button[@id="submit_button"]`).click()
        console.log("submit clicked dddddddddddd")
        await browser.pause(500)

        // The below im not sure on 
        let isManilaPresent = await $(`//button[@data-stid="hotels-destination-menu-trigger"]//span[text()="Going to"]`).isDisplayed('Manila') 
        console.log(`\n\n Testing Value of ${isManilaPresent}`)
        await browser.pause(500)

        let isAug20Displayed = await $(`//button[@data-name="startDate"]`).isDisplayed("20") 
        console.log(`\n\n Testing Value of ${isAug20Displayed}`)
        await browser.pause(500)

        let isSep5Displayed = await $(`//button[@data-name="endDate"]`).isDisplayed("5") 
        console.log(`\n\n Testing Value of ${isSep5Displayed}`)
        await browser.pause(500)

        expect(isManilaPresent, 'Manila is not present').to.be.true 
        expect(isAug20Displayed, 'Aug 20 is not present').to.be.true
        expect(isSep5Displayed, 'Sep 5 is not present').to.be.true

    
// //button[@data-stid="hotels-destination-menu-trigger"]//span[text()="Going to"]
//span[text()="Going to"
})