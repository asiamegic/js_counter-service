const http = require('http');

let counter = 0;

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    counter++;
  } else if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<html>
      <body>
        <h1>Counter: ${counter}</h1>
      </body>
    </html>`);
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method not allowed');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
