import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="w-full h-screen bg-[url('/404.png')] bg-cover bg-no-repeat bg-center">
      <div className="w-full h-full flex flex-col justify-center items-center text-white">
        <h1 className="font-poppins text-9xl font-bold">404</h1>
        <p className="font-bold text-4xl text-white">
          Maybe we{"'"}re working on it...
        </p>
        <Link
          href={"/"}
          className="flex items-center gap-3 px-5 py-2 bg-white rounded-full text-black mt-10"
        >
          <FaLongArrowAltLeft size={24} />
          <p className="font-dm font-bold text-xl">Back To Home</p>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
