/**
 * waitForDisplayed() - to check if element is displayed on the screen
 * waitForClickable() - to wait if the element is clickable
 * waitForEnabled() - to wait until the element is enabled
 * waitForExist() - to wait until the element exists in the dom
 * waitUntil() - which takes a function as input. 
 *          And waitUntil keeps executing the input-function until it returns true
 *      1. takes async function as input
 *      2. async function must return a boolean
 *      3. wait until the condition result into true with in the timeout period
 */

 describe('WaitFor concept', () => {
    it('waitForDisplayed - example', async () => {
        await browser.url('/');

        await $('#day').waitForDisplayed({timeout: 2000, timeoutMsg: 'Date dropdown is NOT displayed with in 2-seconds'});
    });

    it('waitForClickable - example', async () => {
        await browser.url('/');

        await $('<button>').waitForClickable({timeoutMsg: 'Login button is clickable after 10-seconds'});

        await $('#email').setValue('deepak');

        await browser.pause(10000);

    })

    it('waitForEnabled - example', async () => {
        await browser.url('/');

        await $('<button>').waitForEnabled({reverse:true, timeoutMsg: 'Login button is clickable after 10-seconds'});

        await $('#email').setValue('deepak');

        await browser.pause(10000);

    })

    it('waitUntil - example', async () => {
        await browser.url('/');

        // keep waiting until Page title contains 'facebook' (ignoring cases)

        /*
            use waitUntil
                in waitUntil, create a function which check if pageTitle contains 'facebook'
                if it does, return true
        */

        await browser.waitUntil(async () => {
            const pageTitle = await browser.getTitle();
            return pageTitle.toLowerCase().includes('facebook');
        }, {timeout:5000, timeoutMsg:'Facebook title does not contain facebook'});

        await $('#email').setValue('deepak');

        await browser.pause(5000); 

    })

    // keep waiting until the number of autosuggestions is 8
    it('waitUntil - example2 - Pick value from Auto-suggestion', async () => {
        /**
         * Launch hotels.com
         * Type 'New' in going to
         * Select 'Manhattan' from auto-suggestion
         */
        await browser.url('https://www.hotels.com/');

        await $("//button[@aria-label='Going to']").click();

        await $('#destination_form_field').setValue('New');

        await browser.waitUntil(async () => {
            const allSuggestions = await $$("//div[@class='truncate']//strong");
            return allSuggestions.length == 8;
        });

        const autoSuggestionElements = await $$("//div[@class='truncate']//strong");

        for (const autoSuggestionElement of autoSuggestionElements) {
            const suggestionText = await autoSuggestionElement.getText();
            if (suggestionText.toLowerCase().localeCompare('manhattaN'.toLowerCase()) === 0) {
                await autoSuggestionElement.click();
                break;
            }
        }

        await browser.pause(20000);


    });

});