import * as admin from "firebase-admin";
import { User } from "../model/user";
import { FieldValue } from "firebase-admin/firestore";

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

// ユーザIDで指定したユーザを取得
export const getUserByUserId = async (userId: string): Promise<User> => {
  const userTableRef = admin.firestore().collection("users");
  const result = await userTableRef.doc(userId).get();

  const user: User = {
    userId: result.get("userId"),
    userName: result.get("userName"),
  };

  return user;
};

// ユーザ名を更新
export const updateUserName = async (userId: string, userName: string) => {
  const userTableRef = admin.firestore().collection("users");
  const docRef = userTableRef.doc(userId);

  await docRef.update({
    updatedAt: FieldValue.serverTimestamp(),
    userName: userName,
  });

  return;
};
