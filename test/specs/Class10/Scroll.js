describe('Scroll examples', () => {
    /**
     * scrollIntoView
     */

    it('Scroll example - 1', async () => {
        /**
         * 1. Launch darksky.net
         * 2. Click on Time Machine button
         */
        await browser.url('https://www.darksky.net/');

        const timeMachine = await $('//div[@id="timeMachine"]//a');

        await timeMachine.scrollIntoView();

        await browser.pause(10000);


    });
});