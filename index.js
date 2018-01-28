const finalhandler = require('finalhandler')
const http = require('http');
const serveStatic = require('serve-static');

const serve = serveStatic('public', {'index': ['index.html']});

const server = http.createServer((req, res) => {
  serve(req, res, finalhandler(req, res));
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`The server launched on http://127.0.0.1:${port}`);
});

process.on('SIGTERM', function() {
  process.exit(0);
});
