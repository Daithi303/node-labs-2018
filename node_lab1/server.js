// Load the http module to create an http server.
import http from 'http';
import greeting  from './greeting'
import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT
// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer((req, res) => {
  const language = req.headers['accept-language'];
  const resp_language = greeting[language]?language:'en';
  res.writeHead(200, {'Content-Type': 'text/plain' , 'Content-Language': resp_language});
  res.end(greeting[resp_language]);
});

server.listen(port);

// Put a friendly message on the terminal
console.log(`Server running at ${port}`);