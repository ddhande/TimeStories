const http = require("http");
const url = require("url");

module.exports = http.createServer(function (req, res) {
  let service = require("./service.js");
  const reqUrl = url.parse(req.url, true);

  if (reqUrl.pathname == "/getTimeStories" && req.method === "GET") {
    // console.log("Request Type:" + req.method + " Endpoint: " + reqUrl.pathname);

    service.testTimeStories(req, res);
  }
});
