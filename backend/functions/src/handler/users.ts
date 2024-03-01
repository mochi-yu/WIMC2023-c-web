import * as express from "express";
import { GetUserUsecase, UpdateUserNameUsecase, getUserByUserIdUsecase } from "../usecase/user";

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

userRouter.patch("/users/:userId/name", async (req, res) => {
  const userId = req.params["userId"];
  const userName = req.body["updateName"];

  await UpdateUserNameUsecase(userId, userName)
    .catch((e) => {
      console.log(e);
      res.status(500);
    })
    .then(() => {
      res.status(200);
    });

  res.send();

  return;
});
