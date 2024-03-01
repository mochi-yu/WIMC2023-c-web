import * as admin from "firebase-admin";
import { User } from "../model/user";

// 全てのユーザを取得
export const getAllUser = async (): Promise<User[]> => {
  const userTableRef = admin.firestore().collection("users");
  const result = await userTableRef.get();

  const users: User[] = [];
  result.forEach((elm) => {
    users.push({
      userId: elm.get("userId"),
      userName: elm.get("userName"),
    });
  });

  return users;
};

export const getUserByUserId = async (userId: string): Promise<User> => {
  const userTableRef = admin.firestore().collection("users");
  const result = await userTableRef.doc(userId).get();

  const user: User = {
    userId: result.get("userId"),
    userName: result.get("userName"),
  };

  return user;
};
