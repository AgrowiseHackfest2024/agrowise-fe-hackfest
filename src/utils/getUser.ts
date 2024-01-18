import { cookies } from "next/headers";

export default async function getUser() {
  const token = cookies()?.get("token")?.value;

  if (!token) {
    return null;
  }

  const res = await fetch(process.env.BACKEND_URL + "/profile", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (res.status === 401) {
    return { data: null, token: null };
  }

  return { data, token: token as string };
}
