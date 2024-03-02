import * as express from "express";
import { getRecords, postRecord } from "../usecase/record";
import { RawRecordData } from "../model/record";

export const recordRouter = express.Router();

recordRouter.get("/records", async (req, res) => {
  res.set("Access-Control-Allow-Headers", "*");
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST");

  // const placeId = req.query["placeId"];
  // const userId = req.query["userId"];
  // const limit = req.query["limit"];

  const result = await getRecords();
  res.status(200).json({ records: result });

  return;
});

recordRouter.post("/records", async (req, res) => {
  res.set("Access-Control-Allow-Headers", "*");
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST");

  const rawRecords = req.body["rawRecords"] as RawRecordData[];
  const userId = req.body["userId"] as string;
  await postRecord(rawRecords, userId);

  res.status(200).json({ status: "ok" });

  return;
});

recordRouter.patch("/records/:recordId/place", async (req, res) => {
  res.set("Access-Control-Allow-Headers", "*");
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST");

  res.status(201).send("patch /records/:recordId/place");
  return;
});
