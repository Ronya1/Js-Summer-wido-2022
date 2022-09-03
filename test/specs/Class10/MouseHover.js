const { expect } = require("chai");

describe('Mouse Hove in wdio', () => {
    it('Verify notifications can be seen by mouse hover on bell icon', async () => {
        /**
         * 1. Launch yahoo.com
         * 2. Move mouse on bell icon
         * 3. Verify the notifications is displayed
         */

        // 1. Launch yahoo.com
        await browser.url('https://www.yahoo.com/');

        // 2. Move mouse on bell icon
        /**
         * To perform mouse hover on a webElement
         * function: moveTo()
         */
        const bellIcon = await $('#ybarNotificationMenu');

        await bellIcon.moveTo();

        await browser.pause(5000);

    });


    it.only('Verify Church Chairs menu has 7 options', async () => {
        /**
         * 1. Launch https://classroomessentialsonline.com/
         * 2. Move mouse on Church Chairs menu
         * 3. Verify 7 option is displayed
         */

        // 1. Launch https://classroomessentialsonline.com/
        await browser.url('https://classroomessentialsonline.com/');

        // 2. Move mouse on Church Chairs menu
        const churchChairsMenuElement = await $('//a[@href="/church-chairs/"]');
        await churchChairsMenuElement.moveTo();

        // 3. Verify 7 option is displayed
        const churchChairsMenu = await $$('//a[@href="/church-chairs/"]/following-sibling::div//li//a');
        expect(churchChairsMenu.length, 'Church chairs menu list count is not as expected').to.equal(7);
    });

});