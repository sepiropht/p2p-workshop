var net = require("net");
var server = net.createServer(socket => {
  console.log("client connected");
  socket.pipe(socket);
});

server.listen("4000");
