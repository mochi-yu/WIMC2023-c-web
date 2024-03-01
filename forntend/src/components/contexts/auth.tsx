"use client";

import { createContext, useEffect, useState, ReactNode, Dispatch, SetStateAction } from "react";
import { auth } from "@/lib/firebase";
import { User } from "firebase/auth";
import { Loading } from "@/components/ui/loading";
import { UserData } from "@/model/user";
import { GetWithLogin } from "@/lib/axios";

// Contextの定義
type AuthContextProps = {
  currentUser: User | null | undefined;
  signInCheck: boolean;
};

const AuthContext = createContext<AuthContextProps>({
  currentUser: undefined,
  signInCheck: false,
});

type UserInfoContextProps = {
  userInfo: UserData | undefined;
};
const UserInfoContext = createContext<UserInfoContextProps>({
  userInfo: undefined,
});

type SetUserInfoContextProps = {
  setUserInfo: Dispatch<SetStateAction<UserData | undefined>>;
};
const SetUserInfoContext = createContext<SetUserInfoContextProps>({
  setUserInfo: () => undefined,
});

// Providerの定義
interface Props {
  children: ReactNode;
}

function AuthProvider({ children }: Props) {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(undefined);
  const [signInCheck, setSignInCheck] = useState(false);
  const [userInfo, setUserInfo] = useState<UserData | undefined>(undefined);

  // ログイン状態を確認する
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        // ログイン状態
        setCurrentUser(user);

        // ユーザ情報を取得する
        const userId = user.uid;
        const result = (await GetWithLogin("/users/" + userId))["user"] as UserData;
        setUserInfo(result);

        setSignInCheck(true);
      } else {
        // ログアウトの状態では、各stateをundefineにする
        setCurrentUser(undefined);
        setUserInfo(undefined);
        setSignInCheck(true);
      }
    });
  }, [currentUser]);

  if (signInCheck) {
    return (
      <AuthContext.Provider value={{ currentUser, signInCheck }}>
        <SetUserInfoContext.Provider value={{ setUserInfo }}>
          <UserInfoContext.Provider value={{ userInfo }}>{children}</UserInfoContext.Provider>
        </SetUserInfoContext.Provider>
      </AuthContext.Provider>
    );
  } else {
    // ログイン確認中
    // 自分で作ったローディングコンポーネントをレンダリングする
    return <Loading open={true} />;
  }
}

export { AuthContext, UserInfoContext, SetUserInfoContext, AuthProvider };
