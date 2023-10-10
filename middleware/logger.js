const fs = require('fs');
const os = require('os');

module.exports = (req, res, next) => {
    var now = new Date();
    var hour = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    const {method, url} = req;
    const userAgent = req.get("user-agent");

    var data = `${hour}:${minutes}:${seconds} ${method} ${url} user agent: ${userAgent}`;
    console.log(data);

    fs.appendFile('server.log', data + os.EOL, (err) => {
        if (err) throw err;
    });
    next();
}