import Image from "next/image";
import AuthForm from "./components/auth-form";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";

const Page = () => {
  return (
    <div className="w-full h-screen flex bg-[#EEEEEE]">
      <div className="w-1/2 h-full relative">
        <div className="z-10 absolute top-10 left-10 ">
          <Image src="/logo-white.svg" width={50} height={50} alt="logo" />
        </div>
        <div className="absolute z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <p className="font-medium text-3xl text-white font-poppins text-center">
            Join the community of{" "}
            <span className="font-semibold">sustainable</span> farming. <br />
            <span className="text-xl italic">-Fortis Fortuna Adiuvat</span>
          </p>
        </div>
        <Image
          src="/join/join-background.jpg"
          fill
          alt="farm-bg"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 h-screen flex justify-center items-center relative">
        <Link
          href={"/"}
          className="absolute top-8 left-10 flex items-center gap-2 cursor-pointer group"
        >
          <FaArrowLeftLong className="group-hover:-translate-x-1 transition" />
          <p className="font-semibold text-lg">Back to Home</p>
        </Link>
        <AuthForm />
      </div>
    </div>
  );
};

export default Page;
