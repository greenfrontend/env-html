const http = require('http');

const hostname = '0.0.0.0';
const port = process.env.PORT || 8080;
const endpointUri = process.env.ENDPOINT;
const redirectUrl = process.env.REDIRECT_URL;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  msg = `End point: ${endpointUri} | Redirect Url: ${redirectUrl}`
  res.end(msg);
});

server.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`);
  console.log(`End point: ${endpointUri}`);
  console.log(`Redirect url: ${redirectUrl}`);
});
