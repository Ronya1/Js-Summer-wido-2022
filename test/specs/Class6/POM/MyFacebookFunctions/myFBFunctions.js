//const Commands = require("../Commands");
const myFBCommands = require("../MyFacebookFunctions/myFBCommands")

class myFacebookFunctions {

    FBCommands = new myFBCommands

    messengerLink = $('a[title*=Messenger]')
    messengerKeepMeSignedInCheckBox = $('div[class*=Label]')
    keepMeSignedInCheckBox = $('.uiInputLabelLabel')
    messengerPageLoginButton = $('#loginbutton')
    messengerPageFindYourAcctText = $('*=Find your account')
    continueOnMessengerPageRedirect = $('#loginbutton')
    keepMeSignedInCheckBoxRedirect = $('input[type*=checkbox]')
    keepMeSignedInCheckBoxOnRedirect = $('.uiInputLabelLabel')

    // describe('Verify empty messenger login flow', () => {
    //     it.only('Empty Login Flow 1', async() => {
    //         await browser.url('https://www.facebook.com/') // goes to FB.com 
    //         await browser.maximizeWindow()
    //         await browser.pause(1000)
    
    //         messengerLink = await $('a[title*=Messenger]').click(); // finds and clicks messenger 
    //         await browser.pause(1000)
    //         messengerNotSelected = await $('div[class*=Label]').isSelected(); //confirms messenger is not selected (false value)
    //         await browser.pause(1000)
    //         expect(messengerNotSelected, "Keep Me Signed In Is Selected").to.be.false // verifies the above to be false 


    // async launchDarkSkyNet(){
    //     await browser.url(this.WebsiteDomain)
    //     await browser.pause(1000)
    // }

    async launchFBMessenger(){
        await browser.url('https://www.facebook.com/')//url should go on top with locators
        await browser.pause(2000)
        await this.FBCommands.clickWebElement(this.messengerLink)
        //await this.messengerLink.click()
        await browser.pause(2000)
    }

    //clickElement(messengerLink)

 // messengerNotSelected = await $('div[class*=Label]').isSelected(); //confirms messenger is not selected (false value)
    // await browser.pause(1000)
    // expect(messengerNotSelected, "Keep Me Signed In Is Selected").to.be.false // verifies the above to be false 


    async ismessengerKeepMeSignedInSelected(){
        let returnValue = await this.messengerKeepMeSignedInCheckBox.isSelected();
        return returnValue
    }

    // clickKeepMeSignedIn = await $('.uiInputLabelLabel'); // Finds and clicks login button
    // await clickKeepMeSignedIn.scrollIntoView()
    // await clickKeepMeSignedIn.click()
    // await browser.pause(1000).

    async clickKeepMeSignedIn(){
        await this.keepMeSignedInCheckBox.scrollIntoView()
        await this.keepMeSignedInCheckBox.click()
        await browser.pause(2000)
    }

    // messengerPageLoginBtn = await $('#loginbutton'); // Finds and clicks login button
    // await messengerPageLoginBtn.scrollIntoView()
    // await messengerPageLoginBtn.click()
    // await browser.pause(1000)

    async clickLoginButton(){
        await this.messengerPageLoginButton.scrollIntoView()
        await this.messengerPageLoginButton.click()
        await browser.pause(2000)
    }

    // MessengerPageLink = await browser.getUrl() // got new url for the redirect
    // await browser.pause(2000)
    async getNewUrl(){
       return await browser.getUrl()
    }


    // isFindYourAcctPresent = await $('*=Find your account').isDisplayed(); // verifies that 'Find your account and log in" is displayed'
    // await browser.pause(2000)
    async isFindyourAccountPresent(){
        return await this.messengerPageFindYourAcctText.isDisplayed()
    }

    // isContinueEnabled = await $('#loginbutton').isEnabled(); // Verifies 'Continue' button is enabled
    async isContinueenabeled(){
        return await this.continueOnMessengerPageRedirect.isEnabled()
    }

    //isCheckBoxSelected2 = await $('input[type*=checkbox]').isSelected(); // I verify 'Keep me signed in' is not selected 

    async isKeepMySignedInOnRedirectSelected(){
        return await this.keepMeSignedInCheckBoxRedirect.isSelected()
    }

    // clickKeepMeSignedIn2 = await $('.uiInputLabelLabel'); // Finds and clicks login button
    // await clickKeepMeSignedIn2.scrollIntoView()
    // await clickKeepMeSignedIn2.click()
    // await browser.pause(1000)
    async clickKeepMeSignedInOnRedirect(){
        await this.keepMeSignedInCheckBoxOnRedirect.scrollIntoView()
        await this.keepMeSignedInCheckBoxOnRedirect.click()
        await browser.pause(1000)
    }

} 
module.exports = myFacebookFunctions;
