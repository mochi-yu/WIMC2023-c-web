import { CourseData } from "../model/course";
import { getAllPlaces } from "../repository/place";

export const getPlace = async (): Promise<CourseData[]> => {
  return await getAllPlaces();
};
