import * as express from "express";
import { getPlace } from "../usecase/place";

export const placeRouter = express.Router();

placeRouter.get("/places", async (req, res) => {
  res.set("Access-Control-Allow-Headers", "*");
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST");

  const places = getPlace();
  res.status(200).json({ places: places });

  res.status(200).send("get /place");
  return;
});

placeRouter.post("/places", async (req, res) => {
  res.set("Access-Control-Allow-Headers", "*");
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST");

  res.status(201).send("post /place");
  return;
});

placeRouter.put("/places/:placeId", async (req, res) => {
  res.set("Access-Control-Allow-Headers", "*");
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST");

  res.status(201).send("put /places/:placeId");
  return;
});

placeRouter.delete("/places/:placeId", async (req, res) => {
  res.set("Access-Control-Allow-Headers", "*");
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST");

  res.status(201).send("delete /places/:placeId");
  return;
});
