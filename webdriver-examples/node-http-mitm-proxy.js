const Proxy = require('http-mitm-proxy');
const proxy = Proxy();

proxy.onError((context, err) => console.error('proxy error:', err));

function isHomePage(host, url) {
	return host == '2016.seleniumconf.co.uk' && url === '/';
}

proxy.onRequest((context, callback) => {
	const {url, method, headers: {
		host
	}} = context.clientToProxyRequest;

	console.log(method, host, url);

	if (isHomePage(host, url)) {
		context.use(Proxy.gunzip);
		context.onResponseData((context, chunk, callback) => {
			const stringToInsert = '<h1>This was inserted by a proxy!!</h1>';
			const replacedChunk = new Buffer(chunk.toString().replace(/<h1.*?/g, stringToInsert));
			return callback(null, replacedChunk);
		});
	}

	return callback();
});


proxy.listen({
	port: 6000
});