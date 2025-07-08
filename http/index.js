const http = require('http');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'logFile.txt');


// Create the server
const myServer = http.createServer((req, res) => {
    const log =`[${new Date().toLocaleString()}] ${req.method} ${req.url}`;
   fs.appendFile(filePath, log + '\n', (err) => {
      if (err) {
        console.error('Failed to write log:', err);
       }
   });

  const route = req.url;
  // multi routes
  switch (route) {
    case '/':
      res.end('<h1>Welcome to Home Page</h1>');
      break;
    case '/about':
      res.end('<h1>About Us</h1>');
      break;
    case '/contact':
      res.end('<h1>Contact Page</h1>');
      break;
    default:
      res.end('<h1>404 Not Found</h1>');
  }

});

// Start the server
const PORT = 8000;
myServer.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
