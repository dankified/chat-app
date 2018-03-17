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

socket.on('newLocationMessage', function(message) {
  var li = document.createElement('li');
  var a = document.createElement('a');

  var node = document.createTextNode(`${message.from} current location`);

  a.setAttribute("href", message.url);
  
  a.append(node);
  li.append(a);

  document.getElementById('messages').appendChild(li);
});

var locationButton = document.getElementById("send-location");
locationButton.addEventListener('click', function(e) {
  if(!navigator.geolocation) {
    return alert("Geolocation not supported by your browser");
  }

  navigator.geolocation.getCurrentPosition(function(position) {
    socket.emit('createLocationMessage', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    })
  }, function() {
    alert("Unable to fetch location.");
  });
});