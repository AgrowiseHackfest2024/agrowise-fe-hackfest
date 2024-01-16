"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import Image from "next/image";
import { IoPersonCircleOutline } from "react-icons/io5";

const Navbar = () => {
  const scrolled = useScrollTop();
  return (
    <div
      className={`fixed top-0 z-50 inset-x-0 py-3 px-[7%] ${
        scrolled && "bg-white shadow-md"
      } transition`}
    >
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Image src="/logo.svg" width={35} height={35} alt="logo" />
          <p
            className={`text-2xl font-semibold font-dm ${
              scrolled ? "text-black" : "text-white"
            } transition`}
          >
            Agrowise
          </p>
        </div>
        <ul
          className={`flex gap-2 font-dm font-semibold text-lg ${
            scrolled ? "text-black" : "text-white"
          } transition`}
        >
          <li className="px-2">Home</li>
          <li className="px-2">Farmers</li>
          <li className="px-2">Seeds</li>
          <li className="px-2">About</li>
          <div className="flex gap-2 text-white bg-green-800 px-2 items-center rounded-xl ml-4">
            <IoPersonCircleOutline className="text-2xl" />
            <p className="text-base">Account</p>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
