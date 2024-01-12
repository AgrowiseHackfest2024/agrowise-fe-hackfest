import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/seeds");

  return <div>Hello World</div>;
}
