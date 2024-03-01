"use client";

import { AuthContext } from "@/components/contexts/auth";
import { redirect } from "next/navigation";
import { useContext, useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

// ログインしていない場合に、ログイン画面に移動する
export default function CheckNotLogin({ children }: Props) {
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (!currentUser) {
      // ログインしていなかったら
      redirect("/");
    } else {
      // ログインしていたら
      return;
    }
  });

  return <>{children}</>;
}
