import Image from "next/image";
import { redirect } from "next/navigation";
import Hero from "./components/hero";
import KeyValue from "./components/key-value";
import Explore from "./components/explore";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <KeyValue />
      <Explore />
      <Footer />
    </div>
  );
}
