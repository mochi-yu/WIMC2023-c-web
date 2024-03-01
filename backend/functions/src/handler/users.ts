import * as express from "express";
import { GetUserUsecase, getUserByUserIdUsecase } from "../usecase/user";

export const userRouter = express.Router();

userRouter.get("/users", async (_, res) => {
  const users = await GetUserUsecase();
  res.json({ users: users }).status(200);

  return;
});

userRouter.get("/users/:userId", async (req, res) => {
  const userId = req.params["userId"];
  if (userId == "") res.status(400);

  const user = await getUserByUserIdUsecase(userId);
  res.json({ user: user }).status(200);

  return;
});

userRouter.post("/users/:userId/name", async (req, res) => {
  res.status(201).send("post /users/:userId/name");
  return;
});
