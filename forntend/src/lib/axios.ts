import { auth } from "@/lib/firebase";
import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function GetWithLogin(path: string): Promise<any> {
  if (!auth.currentUser) return;

  const idToken = await auth.currentUser.getIdToken();

  return await instance
    .get(path, {
      headers: { Authorization: "Bearer " + idToken },
    })
    .then((res) => {
      const { data } = res;
      return data;
    });
}

export async function PostWithLogin(path: string, data: any): Promise<any> {
  if (!auth.currentUser) return;

  const idToken = await auth.currentUser.getIdToken();

  return await instance
    .post(path, data, {
      headers: { Authorization: "Bearer " + idToken },
    })
    .then((res) => {
      const { data } = res;
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
}

export async function PatchWithLogin(path: string, data: any): Promise<any> {
  if (!auth.currentUser) return;

  const idToken = await auth.currentUser.getIdToken();

  return await instance
    .patch(path, data, {
      headers: { Authorization: "Bearer " + idToken },
    })
    .then((res) => {
      const { data } = res;
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
}

export async function PutWithLogin(path: string, data: any): Promise<any> {
  if (!auth.currentUser) return;

  const idToken = await auth.currentUser.getIdToken();

  return await instance
    .put(path, data, {
      headers: { Authorization: "Bearer " + idToken },
    })
    .then((res) => {
      const { data } = res;
      return data;
    })
    .catch((e) => {
      console.log(e);
    });
}

export async function DeleteWithLogin(path: string): Promise<any> {
  if (!auth.currentUser) return;

  const idToken = await auth.currentUser.getIdToken();

  return await instance
    .delete(path, {
      headers: { Authorization: "Bearer " + idToken },
    })
    .then((res) => {
      const { data } = res;
      return data;
    });
}
