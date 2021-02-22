const fs = require('fs');
const args = process.argv.slice(2);
const url = args[0];
const path = args[1];
const request = require('request');
// request('examples.edu/page', (error, response, body) => {
request(url, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  // fs.writeFile( file, data, options, callback )
  fs.writeFile( path, body, (error) => {
    if (error) throw err;
    console.log(`Downloaded and saved ${body.length} bytes to : ${path}`);
  });
});