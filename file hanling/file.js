const fs = require('fs');
const path = require('path');

// ****NOTE*******
// __dirname gives the absolute path to the folder where file.js is located.
// path.join(__dirname, 'text1.txt') builds a correct, platform-safe path like:
// E:\NodeJS\file hanling\text1.txt


// File paths
const filePath1 = path.join(__dirname, 'text1.txt');
const filePath2 = path.join(__dirname, 'text2.txt');
const copyPath = path.join(__dirname, 'copy.txt');

// Synchronous File Write
fs.writeFileSync(filePath1, 'Hello, how are you');

// Asynchronous File Write
fs.writeFile(filePath2, 'Hii, how are you', (err) => {
  if (err) {
    console.error('ERROR:', err);
  }
});

// Synchronous File Read
 const textResult = fs.readFileSync(filePath1, 'utf-8');
  console.log("text1 data : ",textResult);
  

// Asynchronous File Read
fs.readFile(filePath2, 'utf-8', (err, result) => {
  if (err) {
    console.error('ERROR:', err);
  } else {
    console.log("text2 data : ", result);
  }
});

// Synchronous File Append
fs.appendFileSync(filePath1, '\nThis line is added synchronously.');

// Asynchronous File Append
fs.appendFile(filePath2, '\nThis line is added asynchronously.', (err) => {
  if (err) {
    console.error('ERROR : ', err);
  } 
});

// Copy file
fs.cpSync(filePath1, copyPath);
console.log('File copied to copy.txt.');

// Delete file
setTimeout(() => {
  fs.unlinkSync(copyPath);
}, 3000);
