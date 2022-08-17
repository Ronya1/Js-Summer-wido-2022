// Practice:

/**
 * Change the temp-unit in darksky.net
 * 
 * 1. Launch darksky.net
 * 2. Change temp unit to "˚C, m/s"
 * 
 * 1.) launch browser 
 * 
 * 
 */


describe('Change Temp and to C', () => {
    it('Change Temp to C', async() => {
        await browser.url('https://darksky.net/')
        await browser.maximizeWindow()
        await browser.pause(2000)
    

        const dropDown = $(`(//b[@class='button'])[1]`).click()
        await browser.pause(2000)
        const selectDropDown =  await $(`(//div[@class='selectric-scroll'])[1]//li[@data-index='1']`).click()
        await browser.pause(2000)

// //*[@id='header']//div[contains(@class, 'tric-units')]//option[@value='si'


        // await dropDown.scrollIntoView()
        // await dropDown.click()
    });
});