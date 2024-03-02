import { CourseData } from "../model/course";
import * as admin from "firebase-admin";

export const getAllPlaces = async (): Promise<CourseData[]> => {
  const placeTable = admin.firestore().collection("places");
  const result = await placeTable.get();

  const places: CourseData[] = [];
  result.forEach((elm) => {
    places.push({
      placeId: elm.get("placeId"),
      placeName: elm.get("placeName"),
      lat: elm.get("lat"),
      lon: elm.get("lon"),
    });
  });

  return places;
};
