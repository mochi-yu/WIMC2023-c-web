import * as express from "express";
import { deletePlaceUsecase, getPlace, postPlace } from "../usecase/place";
import { CourseData } from "../model/course";

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

  const newPlace: CourseData = {
    placeName: req.body["placeName"],
    placeId: "",
    lat: req.body["lat"],
    lon: req.body["lon"],
  };
  postPlace(newPlace);

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

  const placeId = req.params["placeId"];
  await deletePlaceUsecase(placeId);

  res.status(200).json({ status: "ok" });
  return;
});
