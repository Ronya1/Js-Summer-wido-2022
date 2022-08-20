//const Commands = require("../Commands");
class myFacebookFunctions {


    messengerLink = $('a[title*=Messenger]')
    isMessengerSelevetedLabel = $('div[class*=Label]')

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
        await browser.url('https://www.facebook.com/')
        await browser.pause(2000)
        //await this.messengerLink.click()
        //await browser.pause(2000)
    }





} 
module.exports = myFacebookFunctions;
