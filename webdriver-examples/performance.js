/*global console */

(function() {

	"use strict";

	var webdriver = require('selenium-webdriver');
	var driver = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();

	driver.manage().window().setSize(1280, 720).then(function() {
		driver.get('http://www.google.com');

		// webdriver.WebDriver.Logs().getAvailableLogTypes().then(function() {
		// 	console.log('############');
		// 	console.log(arguments);
		// });

	webdriver.WebDriver.Logs();

		driver.quit();
	});

}());
