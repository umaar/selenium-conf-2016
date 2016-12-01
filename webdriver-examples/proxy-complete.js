
var webdriver = require('selenium-webdriver'),
     proxy = require('selenium-webdriver/proxy');

 var driver = new webdriver.Builder()
     .withCapabilities(webdriver.Capabilities.chrome())
     .setProxy(proxy.manual({
     	http: '127.0.0.1:6000'
     }))
     .build();


driver.manage()
	.window()
	.setSize(1360, 768)
	.then(() => {
		driver.get('http://2016.seleniumconf.co.uk/');
		driver.sleep(1000);
		driver.quit();
	});