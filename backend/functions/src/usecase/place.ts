import { CourseData } from "../model/course";
import { addNewPlace, deletePlace, getAllPlaces } from "../repository/place";

export const getPlace = async (): Promise<CourseData[]> => {
  return await getAllPlaces();
};

export const postPlace = async (place: CourseData): Promise<void> => {
  return await addNewPlace(place);
};

export const deletePlaceUsecase = async (id: string) => {
  return await deletePlace(id);
};
