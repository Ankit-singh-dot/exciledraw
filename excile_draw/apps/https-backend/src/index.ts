import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRETS } from "@repo/backend-common/config";
import { middleware } from "./middleware";
import { prismaClient } from "@repo/db/client";
import {
  CreateRoomSchema,
  CreateSigninSchema,
  CreateUserSchema,
} from "@repo/common/types";
const app = express();

app.post("/signin", (req, res) => {
  const data = CreateSigninSchema.safeParse(req.body);
  if (!data.success) {
    res.json({
      message: "Incorrect Input ",
    });
    return;
  }
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
  const data = CreateRoomSchema.safeParse(req.body);
  if (!data.success) {
    res.json({
      message: "Incorrect Input ",
    });
    return;
  }
  res.json({
    roomId: 123,
  });
});
app.post("/signup", (req, res) => {
  const data = CreateUserSchema.safeParse(req.body);
  if (!data.success) {
    res.json({
      message: "Incorrect Input ",
    });
    return;
  }
  res.json({
    userId: "123",
  });
});
app.listen(4000, () => {
  console.log("listening to the port 4000");
});
