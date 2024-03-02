import { RawRecordData, RecordData } from "../model/record";
import { getAllRecords, insertNewRecords } from "../repository/record";
import { getUserByUserId } from "../repository/user";

export const getRecords = async (): Promise<RecordData[]> => {
  return await getAllRecords();
};

export const postRecord = async (raw: RawRecordData[], userId: string): Promise<void> => {
  let maxSpeed = -1;
  let distance = 0;

  raw.forEach((elm, index) => {
    if (elm.speed > maxSpeed) maxSpeed = elm.speed;
    if (index != 0) {
      const lat1 = raw[index - 1].lat;
      const lng1 = raw[index - 1].lon;
      distance += calcDistance(lat1, lng1, elm.lat, elm.lon);
    }
  });

  const u = await getUserByUserId(userId);

  const record: RecordData = {
    userID: userId,
    userName: u.userName || "",
    courseID: "0",
    distance: distance,
    maxSpeed: maxSpeed,
    totalTime: raw[raw.length - 1].time - raw[0].time,
    records: raw,
  };
  return await insertNewRecords(record);
};

function calcDistance(lat1: number, lng1: number, lat2: number, lng2: number) {
  const R = Math.PI / 180;

  lat1 *= R;
  lng1 *= R;
  lat2 *= R;
  lng2 *= R;

  return (
    6371 *
    Math.acos(
      Math.cos(lat1) * Math.cos(lat2) * Math.cos(lng2 - lng1) + Math.sin(lat1) * Math.sin(lat2),
    )
  );
}
