import * as express from "express";

export const placeRouter = express.Router();

placeRouter.get("/places", async (req, res) => {
  res.status(200).send("get /place");
  return;
});

placeRouter.post("/places", async (req, res) => {
  res.status(201).send("post /place");
  return;
});

placeRouter.put("/places/:placeId", async (req, res) => {
  res.status(201).send("put /places/:placeId");
  return;
});

placeRouter.delete("/places/:placeId", async (req, res) => {
  res.status(201).send("delete /places/:placeId");
  return;
});
