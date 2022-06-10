const server = require("./controller.js");

const hostname = "localhost";
const port = 3000;

server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/getTimeStories`);
});
