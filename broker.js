var mosca = require('mosca');

const PORT = process.env.PORT
console.log(`we have a port number ${PORT}`)
var settings = {
  port : PORT || 3000
}

var server = new mosca.Server(settings);
console.log("server var established")

server.on('ready', function(){
  console.log(`MQTT Broker running on Port: ${PORT}`)
});


server.on('published', function(packet, client) {
  console.log("made it this far")
  console.log('Published', packet.payload);
});