var socket = io();

socket.on("connect", function() {
  console.log("Connected to server!");
});

socket.on("newMessage", function(data) {
  var li = document.createElement('li');
  var node = document.createTextNode(`From ${data.from}: ${data.text}`);
  li.append(node);
  document.getElementById('messages').appendChild(li);
});

socket.on("disconnect", function() {
  console.log("User was disconnected from server");
});

document.getElementById("message-form").addEventListener("submit", function(e) {
  e.preventDefault();
  socket.emit('createMessage', {
    from: 'User',
    text: document.querySelector("input[name='message']").value
  }, function() {

  })
  document.querySelector("input[name='message']").value = "";
});
