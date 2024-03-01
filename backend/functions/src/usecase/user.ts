import { User } from "../model/user";
import { getAllUser, getUserByUserId } from "../repository/user";

export const GetUserUsecase = async (): Promise<User[]> => {
  return await getAllUser();
};

export const getUserByUserIdUsecase = async (userId: string): Promise<User> => {
  return await getUserByUserId(userId);
};
