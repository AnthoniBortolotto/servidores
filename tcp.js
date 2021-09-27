const net = require("net");

const server = net.createServer((client) => {
  client.setEncoding("utf-8");
  // When receive client data.
  client.on("data", (data) => {
    console.log(`Recebeu a mensagem: ${data}`);
    client.write(
      `vimos que enviou a mensagem\nsua mensagem em maiusculo é:\n${data
        .toString()
        .toUpperCase()}`
    );
  });
});

server.listen(9999, function () {
  console.log("Servidor funcionando");
  server.on("close", function () {
    console.log("TCP server socket is closed.");
  });
  server.on("error", function (error) {
    console.error(JSON.stringify(error));
  });
});
