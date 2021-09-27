const net = require("net");
// This  create and return a net.Socket object to represent TCP client.
function getConn(connName) {
  const option = {
    host: "127.0.0.1",
    port: 9999,
  };
  // Create TCP client.
  const client = net.createConnection(option, () => {
    console.log("Connection name : " + connName);
    console.log(
      "Connection local address : " +
        client.localAddress +
        ":" +
        client.localPort
    );
    console.log(
      "Connection remote address : " +
        client.remoteAddress +
        ":" +
        client.remotePort
    );
  });
  client.setTimeout(1000);
  client.setEncoding("utf8");
  // When receive server send back data.
  client.on("data", (data) => {
    console.log("Server return data : " + data);
  });
  // When connection disconnected.
  client.on("end", () => {
    console.log("Cliente desconectou ");
  });
  client.on("error", (err) => {
    console.error(JSON.stringify(err));
  });
  return client;
}

const ClienteJoao = getConn("João");
ClienteJoao.write("Sou o João");
