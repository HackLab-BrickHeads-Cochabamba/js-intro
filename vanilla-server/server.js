const http = require('http');
const quotes = require('./quotes')
const { readFileSync } = require('fs')

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/quotes' && req.method === 'GET') {
    const response = {
      quotes,
      timestamp: new Date().toISOString()
    }
    res.writeHead(200, {
      'content-type': 'application/json'
    })
    res.end(JSON.stringify(response))
  } else if (req.url === '/' && req.method === 'GET') {
    const indexFile = readFileSync('./index.html')
    res.writeHead(200, {
      'content-type': 'text/html'
    })
    res.end(indexFile.toString())
  } else if (req.url === '/index.css' && req.method === 'GET') { 
    const indexFile = readFileSync('./index.css')
    res.writeHead(200, {
      'content-type': 'text/css'
    })
    res.end(indexFile.toString())
  } else if (req.url === '/mirror') {
    const body = JSON.stringify({
      ip: req.socket.remoteAddress,
      userAgent: req.headers['user-agent']
    })
    res.socket.write(
`HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: ${Buffer.byteLength(body)}
Connection: close

${body}
`
    )
    res.socket.end()
  } else {
    res.writeHead(302, { location: '/' });
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});