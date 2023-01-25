const http = require("http");

const hostname = "0.0.0.0";
const port = process.env.PORT || 8080;

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

server.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`);
});
