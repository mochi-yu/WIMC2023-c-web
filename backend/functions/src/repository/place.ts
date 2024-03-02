import { CourseData } from "../model/course";
import * as admin from "firebase-admin";
import UuidGenerator from "uuid-wand";

export const getAllPlaces = async (): Promise<CourseData[]> => {
  const placeTable = admin.firestore().collection("places");
  const result = await placeTable.get();

  const places: CourseData[] = [];
  result.forEach((elm) => {
    places.push({
      placeId: elm.data()["placeId"],
      placeName: elm.data()["placeName"],
      lat: elm.data()["lat"],
      lon: elm.data()["lon"],
    });
  });

  return places;
};

export const addNewPlace = async (data: CourseData) => {
  const placeTable = admin.firestore().collection("places");

  const uuid = UuidGenerator.shortUuid();
  data.placeId = uuid;
  await placeTable.doc(uuid).set(data);

  return;
};

export const deletePlace = async (id: string) => {
  const placeTable = admin.firestore().collection("places");
  await placeTable.doc(id).delete();

  return;
};
