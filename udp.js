const PORT = 8080;
const HOST = '127.0.0.1';

const dgram = require('dgram');
const server = dgram.createSocket('udp4');
//const msg = Buffer.from("recebido, sua mensagem é muito boa");

server.on('listening', function() {
  const address = server.address();
 console.log('servidor ouvindo em: ' + address.address + ':' + address.port);
});

server.on('message', function(message, remote) {
 console.log(`recebido de ${remote.address}:${remote.port} a mensagem: ${message}`);
 const mensagemTratada = message.toString();
 server.send(`A mensagem em maiusculo é: ${mensagemTratada.toUpperCase()}`, remote.port, remote.address);
});

server.bind(PORT, HOST);
