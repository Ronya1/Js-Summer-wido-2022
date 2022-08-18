const { expect } = require("chai");

describe('dropdown', () => {

it("Change the temp unit in darksky.net", async () => {
        /**
         * Change the temp-unit in darksky.net
         * 
         * 1. Launch darksky.net
         * 2. Store the current-temp in a variable(fT)
         * 3. using tempConversion formula to convert fT into celsius (cT)
         * 4. Change temp unit to "˚C, mph"
         * 5. Verify the current-temp on web is equals to cT
         * 
         * cT = (fT - 32) × (5/9)
         * 
         */
    // 1. Launch darksky.net

    // MY CODE IS BELOW: 
    await browser.url('https://www.darksky.net/'); // Launch darksky.net
    await browser.pause(3000);

    let fTempValue = await $(`//span[@class='summary swap']`).getText() // Store the current-temp in a variable(fT)
    let fTempVal2 = fTempValue.substring(0,2) // This method was incorrect you need to go upto the degree index 

    let convertedTemp = ((fTempVal2 - 32) * (5/9))
    let roundedCTemp = Math.ceil(convertedTemp)
    console.log(`get text ${roundedCTemp}`);
    
    await $('//div[@id="header"]//div[contains(@class,"selectric-units")]//div[@class="selectric"]//b').click();
    await browser.pause(1000);

    await $('//div[contains(@class, "selectric-open")]//li[contains(text(), "˚C") and contains(text(), "mph")]').click();
    await browser.pause(2000);

    const tempUnit = await $('//div[@id="header"]//div[contains(@class,"selectric-units")]//div[@class="selectric"]//span').getText();
    console.log(`\n\ntempUnit -> ${tempUnit}\n\n`);

    let CTempValue_Website = await $(`//span[@class='summary swap']`).getText()
    let CTempVal2_Website = CTempValue_Website.substring(0,2) // This method was incorrect you need to go upto the degree index 
    await browser.pause(5000);
    console.log(`\n\nCtempUnit -> ${CTempVal2_Website}\n\n`);

    expect(roundedCTemp,'current temp does not convert correctly' ).to.equal(CTempVal2_Website); // doesnt match gives 24 vs 25 degrees. 

})

        // /**
        //  * Launch facebook.com
        //  * Find all link-elements using a-tag
        //  * verify array-length should 46
        //  */


    it.only(`Verify the number of links of facebook-homepage is 46`, async () => {
    await browser.url('https://www.facebook.com/')
    await browser.pause(1000)

    const allLinks = await $$(`<a>`)
    const allLinksLenght = await allLinks.length
    console.log(`Checking length ${allLinksLenght}`)

        expect(allLinksLenght, `working`).to.equal(46)
    })
});