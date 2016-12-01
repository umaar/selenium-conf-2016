import { expect } from 'chai';
import { ClientFunction } from 'testcafe';

fixture `Scraper demo`.page `http://2016.seleniumconf.co.uk/`;

function speakerNames() {
	const els = document.querySelectorAll('.speaker-name');
	return Array.prototype.map.call(els, el => el.innerText);
}

const getSpeakerNames = ClientFunction(speakerNames);

test('Selenium Conf speaker names', async t =>
	console.log(await getSpeakerNames())
);
