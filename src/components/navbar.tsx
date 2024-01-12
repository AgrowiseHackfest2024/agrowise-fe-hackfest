"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { IoPersonCircleOutline } from "react-icons/io5";

const Navbar = () => {
  const [isTop, setIsTop] = useState(true);
  const [currentPathName, setCurrentPathName] = useState("");

  useEffect(() => {
    const storedIsTop = sessionStorage.getItem("isTop");
    if (storedIsTop !== null) {
      setIsTop(storedIsTop === "true");
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsTop(currentScrollY < 5);

      sessionStorage.setItem("isTop", (currentScrollY < 5).toString());
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathName = usePathname();

  useEffect(() => {
    setCurrentPathName(pathName);
  }, [pathName]); // Run this effect only once after mounting

  const navbarData = [
    {
      label: "home",
      link: "/",
    },
    {
      label: "farmers",
      link: "/farmers",
    },
    {
      label: "seeds",
      link: "/seeds",
    },
    {
      label: "about",
      link: "/about",
    },
  ];

  return (
    <div>
      <header
        className={`px-[7%] fixed top-0 left-0 w-full flex items-center py-3 duration-500 z-10 ${
          !isTop && "bg-white shadow-md transition"
        }`}
      >
        <div className="container relative z-50 mx-auto xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm">
          <div className="flex items-center justify-between relative">
            {/* Logo */}
            <Image src="/logo-name.svg" width={150} height={50} alt="logo" />
            {/* Navigasi */}
            <div className="flex items-center px-8">
              {/* hamburger button */}
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className="flex w-[28px] flex-wrap gap-[6px] absolute z-30 lg:hidden"
                onClick={() => {
                  const hamburger = document.querySelector("#hamburger");
                  const navMenu = document.querySelector("nav.nav-menu");
                  hamburger?.classList.toggle("hamburger-active");
                  navMenu?.classList.toggle("scale-0");
                }}
              >
                <span
                  className={`hamburger-line origin-top-left bg-black rounded-full`}
                ></span>
                <span className={`hamburger-line bg-black rounded-full`}></span>
                <span
                  className={`hamburger-line origin-bottom-left bg-black rounded-full`}
                ></span>
              </button>
              {/* link */}
              <nav className="nav-menu bg-[#EDEDED] scale-0 absolute  shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full duration-500 origin-top-right py-5 lg:py-0 lg:scale-100 lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none lg:transition-colors z-[100]">
                <ul className="flex flex-col gap-1 lg:flex-row lg:gap-2 items-center text-lg">
                  {navbarData.map(({ label, link }) => (
                    <Link
                      href={link}
                      key={label}
                      className="cursor-pointer px-2 capitalize"
                    >
                      <p className={`${currentPathName === link && "font-semibold"}`}>
                        {label}
                      </p>
                    </Link>
                  ))}
                  <div className="mt-6 lg:mt-0">
                    <div className="flex gap-2 bg-slate-300 px-2 items-center rounded-xl lg:ml-4">
                      <IoPersonCircleOutline className="text-2xl" />
                      <p className="text-base font-semibold">Account</p>
                    </div>
                  </div>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
