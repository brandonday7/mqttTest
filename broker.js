var mosca = require('mosca');

const PORT = process.env.PORT
var settings = {
  port : PORT || 3000
}

var server = new mosca.Server(settings);

server.on('ready', function(){
  console.log(`MQTT Broker running on Port: ${PORT}`)
});


server.on('published', function(packet, client) {
  console.log('Published', packet.payload);
});