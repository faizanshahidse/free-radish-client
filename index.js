const app = require("./http-server");
const WebSocket = require("ws");

const server = require("http").createServer();

const PORT = 5001;

server.on("request", app);

const wss = new WebSocket.Server({ server });

// Establish connections and handle events
wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    console.log("message........", JSON.parse(message));
  });
});

server.listen(PORT, (req, res) => {
  console.log(`Server is listening on PORT ${PORT}`);
});
