import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRETS } from "@repo/backend-common/config";
import { middleware } from "./middleware";
const app = express();

app.post("/signin", (req, res) => {
  const userId = 1;
  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRETS
  );
  res.json({
    token,
  });
});

app.post("/room", middleware, (req, res) => {
  res.json({
    roomId: 123,
  });
});
app.post("/signup", (req, res) => {});
app.listen(4000, () => {
  console.log("listening to the port 4000");
});
