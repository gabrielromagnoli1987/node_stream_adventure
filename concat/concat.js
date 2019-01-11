const concat = require('concat-stream');

/* `concat-stream` is a write stream that you can pass a callback to get the
complete contents of a stream as a single buffer. 
https://www.npmjs.com/package/concat-stream */

process.stdin.pipe(concat(function (src) {
    var s = src.toString().split('').reverse().join('');
    console.log(s);
}));