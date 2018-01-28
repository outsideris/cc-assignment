const finalhandler = require('finalhandler')
const http = require('http');
const serveStatic = require('serve-static');

const serve = serveStatic('public', {'index': ['index.html']});

const server = http.createServer((req, res) => {
  serve(req, res, finalhandler(req, res));
});

server.listen(3000, () => {
  console.log('The server launched on http://127.0.0.1:3000');
});
