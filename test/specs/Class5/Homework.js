

// Due - Aug 19 (Friday eod)
/**
 * 
 * Launch darksky.net
 * Get all the timeline data in an array
 * then print array in the console.
 */

describe('Get all timeline data', () => {
  it('Get all Day Data', async () => {
    await browser.url('https://darksky.net/')
    await browser.pause(2000)

    let scroleIntoView = await $('div[class=scroll-container]').scrollIntoView(); 
    await browser.pause(2000)

    let allTimeValues = await $$(`//*[@class='hours']`)
    //console.log(`testing list ${myList}`);

    for (const printTimes of allTimeValues) {
        console.log(await printTimes.getText());
        break;
    }
  })  

});

//
//`//*[@class='scroll-container']//*[@class='hours']`



/**
 * Verify destination and check-in/ and check-out dates are as user selected
 * 
 * 1. Launch hotels.com
 * 2. Type "man" in destination
 * 3. Select "Manila" from auto-suggestion
 * 4. Select Aug 20 to Sep-5 as check-in and check-out respectively
 * 5. Click Search button
 * 6. Verify destination has Manila
 * 7. Verify check-in date in Aug-20
 * 8. Verify check-out date in Sep-5
 * 
 */

/**
 * HOW TO SOLVE THIS?
 * 1.) launch hotels.com 
 * 2.) locate search bar and sype in Man
 * 3.) select the auto suggestion that states Manila 
 * 4.) locate the date drop down and click 
 * 5.) locate August 20th 
 * 6.) then do the same process for checkout Sept-5th 
 * 7.) locate and click search 
 * 8.) Locate and get text for Manila Verify it states Manila 
 * 9.) verify dates iclude aug-20 and sep-5
 */