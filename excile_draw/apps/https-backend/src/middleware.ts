import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRETS } from "@repo/backend-common/config";
export function middleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers["authorization"] ?? "";
  const decoded = jwt.verify(token, JWT_SECRETS);
  if (decoded) {
    // @ts-ignore
    req.userId = decoded.userId;
    next();
  } else {
    res.status(404).json({
      message: "Unauthorized",
    });
  }
}
