var spawn = require('child_process').spawn;
const duplexer2 = require('duplexer2');

module.exports = function (cmd, args) {
    // spawn the process and return a single stream
    // joining together the stdin and stdout here
    var childProc = spawn(cmd, args);
    return duplexer2(childProc.stdin, childProc.stdout);
};
