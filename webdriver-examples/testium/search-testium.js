const assert = require('assert');

const browser = require('testium-mocha').browser;

describe('Testium Example', function() {
  before(browser.beforeHook());

  it('performs a google search', function() {
  	const linkSelector = '[href="http://seleniumconf.co.uk/"]';
    browser.navigateTo('https://google.com');
    browser.type('[name="11111q"]', 'selenium conf 2016')
	browser.waitForElementExist(linkSelector);
    browser.click(linkSelector);
    console.log('Title is: ', browser.getPageTitle());
  });
});