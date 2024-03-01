import { User } from "../model/user";
import { getAllUser, getUserByUserId, updateUserName } from "../repository/user";

export const GetUserUsecase = async (): Promise<User[]> => {
  return await getAllUser();
};

export const getUserByUserIdUsecase = async (userId: string): Promise<User> => {
  return await getUserByUserId(userId);
};

export const UpdateUserNameUsecase = async (userId: string, userName: string) => {
  await updateUserName(userId, userName);

  return;
};
