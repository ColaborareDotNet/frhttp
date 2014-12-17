var FRHttp = require('./lib/frhttp.js');

var server = FRHttp.createServer();

server.GET('/api/client/:clientId');
server.GET('/api/client/:clientId/package/:package').onValue(
	function() {
		server.TAP_GET('/api/client/123/package/34').onValue(function (val) {
			console.log(JSON.stringify(val));
		});
		server.TAP_GET('/api/client/123').log();
	}
);
