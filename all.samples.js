'use strict';


var FRHttp = require('./lib/frhttp.js');
var server = FRHttp.createServer();

require('./samples/hello.world.js')(server);
require('./samples/multiply.js')(server);
require('./samples/divide.js')(server);
require('./samples/check.square.js')(server);
require('./samples/post.back.js')(server);
require('./samples/factorial.js')(server);
require('./samples/inject.js')(server);
require('./samples/uncaught.exception.js')(server);

server.listen(8001);