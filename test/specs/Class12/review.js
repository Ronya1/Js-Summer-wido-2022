const { expect } = require("chai");

describe('Review session', () => {
    /**
     * 1. git and branches
     * 2. Cucumber - Background, Scenario Outline, allure report
     * 3. waitFor*, switchToWindow, closeWindow and moveToElement
     * 4. Xpath - Axes - following, preceding, following-sibling, preceding-sibling
     */


    /**
     * 1. Launch https://www.kohls.com/
     * 2. Click on Sho by Category
     * 3. Move mouse on School, College & Beyond
     * 4. Click on Frames & Wall Decor
     * 5 Verify title -> "Dorm Essentials Picture Frames & Photo Albums" is displayed
     */

    it('Kohls flow - Anya Solution', async () => {
            await browser.url('https://www.kohls.com/')
            await browser.pause(2000);
            const shopByCategoryBut = await $("//span[text()='Shop by Category']")
            await browser.pause(2000);
            await shopByCategoryBut.click();
            await browser.pause(2000);
            const schoolDropDown = await $("//a[contains(text(), 'School, College & Beyond')]")
            await browser.pause(2000);
            await schoolDropDown.moveTo();
            await browser.pause(2000);
            const framesBut = await $("//a[text()='Frames & Wall Decor']")
            await browser.pause(2000);
            await framesBut.click();
            await browser.pause(2000);
            expect(await browser.getTitle() === "Dorm Essentials Picture Frames & Photo Albums", 'not displayed').to.be.true;
            await browser.pause(2000);
    });

    it('Kohls flow - Micheal solution', async () => {
        await browser.url('https://www.kohls.com/')
        await browser.pause(2000)
        await $('//span[contains(text(),"Shop by Category")]').click()
        await $('//li[@class="navigation-item"]').moveTo()
        await $('//li[@class="navigation-item navigation-itemHover"]').moveTo()
        await $('//a[contains(text(),"Frames & Wall Decor")]').waitForClickable()
        await $('//a[contains(text(),"Frames & Wall Decor")]').click()
        await browser.pause(2000)
        expect(browser.getTitle(),'it does not equal').to.contain('Dorm');

        const expPageTitle = "Dorm Essentials Picture Frames & Photo Albums, Home Decor | Kohl's";
        const actualPageTitle = await browser.getTitle();
        
    });


    it('Kohls flow - Firuz Solution', async () => {
        await browser.url('https://www.kohls.com/')
        await $('//span[text()="Shop by Category"]').click();
        await browser.pause(3000);
        await $('//a[@href="/sale-event/school.jsp?cc=bts-TN1.0-schoolessentials"]').moveTo();
        await browser.pause(3000);
        await $('//a[text()="Frames & Wall Decor"]').click();
        const theText = $('//h1[text()="Dorm Essentials Picture Frames & Photo Albums"]').getText();
        await browser.pause(3000);
        expect(theText, 'Is not correct').to.equal('Dorm Essentials Picture Frames & Photo Albums');
    });



});