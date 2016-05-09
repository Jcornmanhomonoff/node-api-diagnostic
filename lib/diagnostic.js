// Write a function to sum the numbers in a file.
//
// This function should take the name of a plain text file with one number per
// line, as in data/integers.txt.
// It should add all the numbers and pass the result as the second argument to
// the callback provided. e.g `callback(null, sum);`.
//
// Blank lines should be ignored.
// However, if there is a line with non-numeric content (e.g. "oops"),
// an Error should be passed as the first argument to the callback provided,
// e.g. `callback(new Error('line not a number'));`
//

'use strict';

const fs = require('fs');

let inFile = process.argv[2] === '-' ? stdin : process.argv[2];

const sumLines = (filename, callback) => {
  fs.readFile(inFile, { encoding: 'utf8' }, (error, data) => {
    let total = 0;
    if(error) {
      console.error(error.stack);
      return;
    }

  total = data.split('\n');

  total.forEach(total => {
    if (total) {
      console.log(total);
    }

    //
    // var i=0;
    // total.forEach(total => {
    // i++;
    // if(i=3){
    //   total+=Number(data)
    // }
    // });

    console.log(total);


module.exports = {
  sumLines,
};
