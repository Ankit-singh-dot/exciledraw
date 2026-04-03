import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });
wss.on("connection", function connection(ws) {
  console.log("client connected");
  ws.on("message", function message(data) {
    console.log("Received", data.toString());
    ws.send("pong");
  });
});
