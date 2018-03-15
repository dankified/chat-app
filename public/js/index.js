var socket = io();
socket.on("connect", function() {
  console.log("Connected to server!");
});

socket.on("disconnect", function() {
  console.log("User was disconnected from server");
});

socket.on("newEmail", function(data) {
  console.log(data);
});
