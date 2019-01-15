const through2 = require('through2');
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        req.pipe(through2(write, end)).pipe(res);
    }
});
server.listen(process.argv[2]);

function write(buf, _, next) {
    this.push(buf.toString().toUpperCase());
    next();
}
function end (done) { done(); }
