import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRETS } from "./config";
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
app.post("/signup", (req, res) => {});
app.listen(4000, () => {
  console.log("listening to the port 4000");
});
