import * as express from "express";
import { GetUserUsecase, UpdateUserNameUsecase, getUserByUserIdUsecase } from "../usecase/user";

export const userRouter = express.Router();

userRouter.get("/users", async (_, res) => {
  res.set("Access-Control-Allow-Headers", "*");
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST");

  const users = await GetUserUsecase();
  res.json({ users: users }).status(200);

  return;
});

userRouter.get("/users/:userId", async (req, res) => {
  res.set("Access-Control-Allow-Headers", "*");
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST");

  const userId = req.params["userId"];
  if (userId == "") res.status(400);

  const user = await getUserByUserIdUsecase(userId);
  res.json({ user: user }).status(200);

  return;
});

userRouter.patch("/users/:userId/name", async (req, res) => {
  res.set("Access-Control-Allow-Headers", "*");
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST");

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
