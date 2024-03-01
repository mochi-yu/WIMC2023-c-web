import * as express from "express";

export const recordRouter = express.Router();

recordRouter.get("/records", async (req, res) => {
  res.status(200).send("record get");
  return;
});

recordRouter.post("/records", async (req, res) => {
  res.status(201).send("record post");
  return;
});

recordRouter.patch("/records/:recordId/place", async (req, res) => {
  res.status(201).send("patch /records/:recordId/place");
  return;
});
