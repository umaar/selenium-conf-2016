import { expect } from 'chai';
import { ClientFunction } from 'testcafe';

const getTitle = ClientFunction(() => document.title);


fixture `Google Search for Selenium Conf 2016`
    .page `https://www.google.com`;

test('Google Search', async t => {
    await t.typeText('[name="q"]', 'selenium conf 2016')
    await t.click('[name="btnK"]');
    await t.click('[href="http://seleniumconf.co.uk/"]');
    console.log('Title: ', await getTitle());
});


