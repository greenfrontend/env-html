const http = require("http");

const PORT = 3000;
const HOST = "0.0.0.0";

const server = http.createServer((_, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Environment Variables</h1>");
  res.write("<ul>");
  for (const [key, value] of Object.entries(process.env)) {
    res.write(`<li>${key}: ${value}</li>`);
  }
  res.write("</ul>");
  res.end();
});

server.listen(3000, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
