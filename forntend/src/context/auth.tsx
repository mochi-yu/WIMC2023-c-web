"use client";

import { createContext, useEffect, useState, ReactNode, Dispatch, SetStateAction } from "react";
import { auth } from "@/lib/firebase";
import { User } from "firebase/auth";
import { Loading } from "@/components/loading";

// Contextの定義
type AuthContextProps = {
  currentUser: User | null | undefined;
  signInCheck: boolean;
};

const AuthContext = createContext<AuthContextProps>({
  currentUser: undefined,
  signInCheck: false,
});

// Providerの定義
interface Props {
  children: ReactNode;
}

function AuthProvider({ children }: Props) {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(undefined);
  const [signInCheck, setSignInCheck] = useState(false);

  // ログイン状態を確認する
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        // ログイン状態
        setCurrentUser(user);
        setSignInCheck(true);
      } else {
        // ログアウトの状態では、各stateをundefineにする
        setCurrentUser(undefined);
        setSignInCheck(true);
      }
    });
  }, [currentUser]);

  if (signInCheck) {
    return (
      <AuthContext.Provider value={{ currentUser, signInCheck }}>{children}</AuthContext.Provider>
    );
  } else {
    // ログイン確認中
    // 自分で作ったローディングコンポーネントをレンダリングする
    return <Loading open={true} />;
  }
}

export { AuthContext, AuthProvider };
