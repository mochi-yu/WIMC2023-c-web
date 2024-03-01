import * as admin from "firebase-admin";
import { addNewUser } from "../repository/user";

export const AddNewUserController = async (user: admin.auth.UserRecord) => {
  await addNewUser(user.uid);

  return true;
};
