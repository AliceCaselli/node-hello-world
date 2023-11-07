const http = require("http");

const dotenv = require("dotenv");

dotenv.config();

let port = +process.env.PORT || 8080;


function htmlResponse(res, content) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(content);
}


function jsonResponse(res, content) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
        JSON.stringify(content)
    );
}


const server = http.createServer(function (req, res) {
    htmlResponse(res, "<h1>Hello World</h1>");

    jsonResponse(res, { message: "Hello World" });
});

server.listen(port, function () {
    console.log("http://localhost:" + port);
});