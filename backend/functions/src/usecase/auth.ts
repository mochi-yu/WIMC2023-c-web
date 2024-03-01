import * as admin from "firebase-admin";
import { FieldValue } from "firebase-admin/firestore";

export const AddNewUserController = async (user: admin.auth.UserRecord) => {
  // コレクションの参照を取得
  const userCollectionRef = admin.firestore().collection("users");
  const userCount = await userCollectionRef
    .count()
    .get()
    .then((res) => {
      return res.data().count;
    });

  // ユーザテーブルにログインした人の情報を追加
  userCollectionRef.doc(user.uid).set({
    userId: user.uid,
    userName: "サンプルユーザ" + (userCount + 1),
    joinedAt: FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp(),
  });

  return true;
};
