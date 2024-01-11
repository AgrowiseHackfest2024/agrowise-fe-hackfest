import Image from "next/image";
import { IoPersonCircleOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="fixed top-0 inset-x-0 py-3 px-[7%]">
      <div className="w-full flex justify-between items-center">
        <Image src="/logo-name.svg" width={150} height={50} alt="logo" />
        <ul className="flex gap-2 font-dm font-semibold text-lg">
          <li className="px-2">Home</li>
          <li className="px-2">Farmers</li>
          <li className="px-2">Seeds</li>
          <li className="px-2">About</li>
          <div className="flex gap-2 bg-slate-300 px-2 items-center rounded-xl ml-4">
            <IoPersonCircleOutline className="text-2xl" />
            <p className="text-base">Account</p>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
