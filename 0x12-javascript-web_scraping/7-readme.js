#!/usr/bin/node
var fs = require('fs');

const file = process.argv[2] || '';

fs.readFile(file, 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }
  process.stdout.write(data);
});