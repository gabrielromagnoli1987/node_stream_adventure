const split = require('split');
const through2 = require('through2');


// this solution passes the test but the other its better
let count = 1;
process.stdin
    .pipe(split())
    .pipe(through2((line, _, next) => {
        if (count % 2 === 0) {
            console.log(line.toString().toUpperCase())
        } else {
            console.log(line.toString().toLowerCase())
        }
        count++;
        next();
    }));

// the tutorial answer:
/* var through = require('through2');
var split = require('split');

var lineCount = 0;
var tr = through(function (buf, _, next) {
    var line = buf.toString();
    this.push(lineCount % 2 === 0
        ? line.toLowerCase() + '\n'
        : line.toUpperCase() + '\n'
    );
    lineCount ++;
    next();
});
process.stdin
    .pipe(split())
    .pipe(tr)
    .pipe(process.stdout)
; */
    