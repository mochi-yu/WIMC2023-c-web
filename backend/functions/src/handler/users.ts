import * as express from "express";

export const userRouter = express.Router();

userRouter.get("/users", async (req, res) => {
  res.status(200).send("get /users");
  return;
});

userRouter.post("/users/:userId/name", async (req, res) => {
  res.status(201).send("post /users/:userId/name");
  return;
});
