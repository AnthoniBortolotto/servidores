const PORT = 8080;
const HOST = "127.0.0.1";

const dgram = require("dgram");
const mensagem = Buffer.from("Bom dia");
const client = dgram.createSocket("udp4");

client.on("message", function (message, remote) {
  console.log(`recebido de ${remote.address}:${remote.port} a mensagem: ${message}`);
});



client.send(mensagem, 0, mensagem.length, PORT, HOST, function (err, bytes) {
  if (err) throw err;
  console.log("mensagem UDP enviada para " + HOST + ":" + PORT);

});

//client.bind(3030, HOST);