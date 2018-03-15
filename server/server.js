const express = require("express");
const http = require("http");
const path = require("path");
const socketIO = require("socket.io");

const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
	console.log("New user connected!");

	socket.emit('newEmail', {
		from: "Some dude",
		content: "Some shit",
		createdAt: Date.new
	});

	socket.on('disconnect', () => {
		console.log("User disconnected!")
	});

	socket.on('createEmail', (newEmail) => {
		
	});
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
