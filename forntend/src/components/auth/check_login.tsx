"use client";

import { AuthContext } from "@/components/contexts/auth";
import { redirect } from "next/navigation";
import { useContext, useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

// ログインしている場合にホーム画面に移動する
export default function CheckLogin({ children }: Props) {
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (!currentUser) {
      // ログインしていなかったら
      return;
    } else {
      // ログインしていたら
      redirect("/home");
    }
  });

  return <>{children}</>;
}
