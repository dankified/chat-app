var socket = io();

socket.on("connect", function() {
  console.log("Connected to server!");
  
  socket.emit('createMessage', {
    from: "This fucking asshole",
    text: "Some stupid text"
  })
});

socket.on('newMessage', function(data) {
  console.log("Some fucking imbecile sent this message", data);
})

socket.on("disconnect", function() {
  console.log("User was disconnected from server");
});
