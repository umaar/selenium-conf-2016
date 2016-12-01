const webdriver = require('selenium-webdriver');
const browser = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();

async function start() {
	browser.get('https://www.google.com');
	browser.findElement(webdriver.By.name('q')).sendKeys('selenium conf 2016');
	browser.findElement(webdriver.By.name('btnG')).click();
	const link = webdriver.until.elementLocated(webdriver.By.css('[href="http://seleniumconf.co.uk/"]'));
	(await browser.wait(link, 2000)).click();
	console.log('The current title is: ', await browser.getTitle());
	browser.quit()
}

start();