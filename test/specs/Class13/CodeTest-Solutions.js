const { expect } = require("chai");
const moment = require("moment");

describe('Code Test', () => {

    /**
     * 1. Launch facebook.com
     * 2. Click on Learn about Hotels.com Rewards
     * 3. -> Verify Hotels Rewards opened in a new window
     * 4. Click on Join Now
     * 5. -> Verify Form is blank
     * 6. -> Verify Continue button is NOT enabled
     */
    it('Question - 1', async () => {
        const launchUrl = 'https://www.hotels.com/';
        await browser.url(launchUrl);

        const learnAboutRewards = await $('=Learn about Hotels.com Rewards');
        await learnAboutRewards.click();

        const allHandles = await browser.getWindowHandles();
        for (handle of allHandles) {
            await browser.switchToWindow(handle);
            const currentUrl = await browser.getUrl();
            if (currentUrl.includes('rewards')) {
                break;
            }
        }

        const joinNow = await $('=JOIN NOW');
        await joinNow.click();

        await $('#signupFormEmailInput').waitForDisplayed();

        const signUpEmailValue = await $('#signupFormEmailInput').getAttribute('value');
        console.log(`\n\nsignUpEmailValue -> ${signUpEmailValue}\n\n`);
        expect(signUpEmailValue, 'Sign Up Email is not blank').to.equal('');

        const signUpFNameValue = await $('#signupFormFirstNameInput').getAttribute('value');
        console.log(`\n\nsignUpFNameValue -> ${signUpFNameValue}\n\n`);
        expect(signUpFNameValue, 'Sign Up First Name is not blank').to.equal('');

        const signUpLNameValue = await $('#signupFormLastNameInput').getAttribute('value');
        console.log(`\n\nsignUpLNameValue -> ${signUpLNameValue}\n\n`);
        expect(signUpLNameValue, 'Sign Up Last name is not blank').to.equal('');

        const signUpPwdValue = await $('#signupFormPasswordInput').getAttribute('value');
        console.log(`\n\nsignUpPwdValue -> ${signUpPwdValue}\n\n`);
        expect(signUpPwdValue, 'Sign Up Password is not blank').to.equal('');

        const isContinueEnabled = await $('#signupFormSubmitButton').isEnabled();
        console.log(`\n\nisContinueEnabled -> ${isContinueEnabled}\n\n`);
        expect(isContinueEnabled, 'Continue button is enabled').to.be.false;








    })


    /**
     * 1. Launch darksky.net
     * 2. Verify timeline has 12-data points with 2 hours gap from current hour
     */
    it('Question - 2', async () => {
        const launchUrl = 'https://www.darksky.net/';
        await browser.url(launchUrl);

        await browser.waitUntil(async () => {
            const timelineDataPoints = await $$("//div[@id='timeline']//div[@class='hours']//span[not(starts-with(@class,'hour'))]");
            return timelineDataPoints.length == 12;
        });

        const timelineDataPoints = await $$("//div[@id='timeline']//div[@class='hours']//span[not(starts-with(@class,'hour'))]");
        let actualTimeline = [];

        for (dataPoint of timelineDataPoints) {
            const dataPointValue = await dataPoint.getText();
            actualTimeline.push(dataPointValue);
        }
        console.log(`\n\n actualTimeline -> ${actualTimeline}\n\n`);

        let expectedTimeline = ['Now'];
        let now = moment();

        for (let i=2 ; i<=12 ; i++) {
            now.add(2, 'hour');
            expectedTimeline.push(now.format('ha'));
        }
 
        console.log(`\n\n expectedTimeline -> ${expectedTimeline}\n\n`);

        expect(actualTimeline, 'Timeline is not as expected').to.eql(expectedTimeline);

    });
    /**
     * In case, you need to compare if two Arrays are identical using chai.
     * 
     * Use eql instead equal:
     * expect(array1, 'Arrays are not identical').to.eql(array2);
     * 
     * eg:
     * arr1 = [1, 2, 3];
     * arr2 = [1, 2, 3];
     * 
     * expect(array1, 'Arrays are not identical').to.equal(array2);   // fails
     * 
     * expect(array1, 'Arrays are not identical').to.eql(array2);   // pass
     * 
     */

    /**
     * 1. Launch darksky.net
     * 2. Scroll to Today's timeline
     * 3. Click on + button
     * 4. Verify minTemp on and in Today's timeline is same
     * 5. Verify maxTemp on and in Today's timeline is same
     */
    it('Question - 3', async () => {
        const launchUrl = 'https://www.darksky.net/';
        await browser.url(launchUrl);

        const openTodayButton = await $("//a[@data-day='0']//span[@class='open']");
        await openTodayButton.scrollIntoView();

        await openTodayButton.click();

        await $("//a[@data-day='0']//following-sibling::div[@class='dayDetails revealed']//span[@class='lowTemp swap']//span[@class='temp']").scrollIntoView();

        const minTempOnTimeline = await $("//a[@data-day='0']//span[@class='minTemp']").getText();
        const maxTempOnTimeline = await $("//a[@data-day='0']//span[@class='maxTemp']").getText();

        const minTempInTimeline = await $("//a[@data-day='0']//following-sibling::div[@class='dayDetails revealed']//span[@class='highTemp swip']//span[@class='temp']").getText();
        const maxTempInTimeline = await $("//a[@data-day='0']//following-sibling::div[@class='dayDetails revealed']//span[@class='lowTemp swap']//span[@class='temp']").getText();

        expect(minTempOnTimeline, 'Minimum temp on and in Today timeline is not same').to.equal(minTempInTimeline);
        expect(maxTempOnTimeline, 'Maximum temp on and in Today timeline is not same').to.equal(maxTempInTimeline);

    });
});