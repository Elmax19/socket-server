var app = require('express')();
var server = app.listen(3000);
var io = require('socket.io')(server, {
  cors: {
    origin: "*",
    credentials: true
  }
});

io.on('connection', function (socket) {
  console.log("A user connected");
});

server.listen(3000, () => {
  console.log("Socket.io server is listening on port 3000");
});
