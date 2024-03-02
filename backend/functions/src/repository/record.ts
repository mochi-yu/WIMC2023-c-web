import { RecordData, RecordData2Model } from "../model/record";
import * as admin from "firebase-admin";
// import { FieldValue } from "firebase-admin/firestore";

export const getAllRecords = async (): Promise<RecordData[]> => {
  const recordsTableRef = admin.firestore().collection("records");
  const result = await recordsTableRef.get();

  const records: RecordData[] = [];
  result.forEach((elm) => {
    records.push(RecordData2Model(elm));
  });

  return records;
};

export const insertNewRecords = async (data: RecordData): Promise<void> => {
  const recordsTableRef = admin.firestore().collection("records");
  await recordsTableRef.add(data);

  return;
};
