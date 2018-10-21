var http = require('http')

http.createServer(function(req, res) {
    if (req.url == '/favicon.ico') return
    var location = "https://www.reddit.com/r" + req.url
    if (req.url == '/') location = "https://www.reddit.com/"
    const head = {
        'Location': location
    }
    res.writeHead(302, head)
}).listen(8080);
