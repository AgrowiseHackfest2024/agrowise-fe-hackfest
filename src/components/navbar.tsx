"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import fetcher from "@/utils/fetcher";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoPersonCircleOutline } from "react-icons/io5";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";

const navData = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Farmers",
    link: "/farmers",
  },
  {
    name: "History",
    link: "/history",
  },
  {
    name: "About",
    link: "/about",
  },
];

const Navbar = ({ token }: { token?: string }) => {
  const pathName = usePathname();
  const scrolled = useScrollTop();
  const router = useRouter();

  const {
    data: profileData,
    error,
    isLoading,
  } = useSWR([process.env.BACKEND_URL + `/profile`, token], ([url, token]) =>
    fetcher(url, token)
  );
  const handleSignOut = () => {
    const cookies = new Cookies();
    cookies.remove("token", { path: "/" });
    router.refresh();
  };

  console.log("INI PROFILE", profileData);

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
          className={`flex gap-8 font-dm font-semibold items-center text-lg ${
            scrolled ? "text-black" : "text-white"
          } transition`}
        >
          {navData.map((nav) => (
            <div className="relative" key={nav.link}>
              <Link href={nav.link}>{nav.name}</Link>
              <div
                className={`absolute w-full bottom-0 left-0 h-[0.2rem] rounded-full transition-all origin-left duration-300 ${
                  pathName === nav.link ? "scale-x-100" : " scale-x-0"
                } ${scrolled ? "bg-black" : "bg-white"}`}
              ></div>
            </div>
          ))}
          {profileData?.user ? (
            <div className="flex gap-2 text-white bg-green-800 px-3 py-2 items-center rounded-xl ml-4">
              <IoPersonCircleOutline className="text-2xl" />
              <p className="text-base">Hi, {profileData.user.nama}</p>
            </div>
          ) : (
            <Link
              href={"/join"}
              className={`px-3 py-2 bg-primary rounded-lg text-white`}
            >
              Join Us
            </Link>
          )}
          {profileData?.user && (
            <div
              className="px-3 py-2 bg-red-500 rounded-lg text-white cursor-pointer"
              onClick={handleSignOut}
            >
              Sign Out
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
