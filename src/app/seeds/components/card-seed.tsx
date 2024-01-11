import Image from "next/image";
import { IoMdPricetags } from "react-icons/io";
import { GiJellyBeans } from "react-icons/gi";
import { FaStar } from "react-icons/fa6";
import { PiPlantFill } from "react-icons/pi";

const CardSeed = () => {
  return (
    <div className="w-full max-w-[22rem] bg-white aspect-[381/455] rounded-md overflow-hidden shadow-md hover:scale-[105%] transition cursor-pointer">
      <div className="w-full h-1/2 relative">
        <Image
          src="/benih/bawang.jpg"
          fill
          className="w-full h-full object-cover"
          alt="bawang"
        />
      </div>
      <div className="px-[5%] py-6 flex flex-col justify-between h-1/2">
        <div>
          <h1 className="text-2xl font-bold">Benih Jagung</h1>
          <p className="font-semibold text-slate-500">500 gram</p>
        </div>
        <div className="flex justify-between items-end">
          <div className="flex flex-col items-center">
            <IoMdPricetags className="text-black" size={22} />
            <p className="text-sm mt-1 font-semibold">Rp11,000</p>
            <p className="text-sm font-semibold text-slate-600">price</p>
          </div>
          <div className="flex flex-col items-center">
            <GiJellyBeans className="text-black" size={22} />
            <p className="text-sm mt-1 font-semibold">55 pcs</p>
            <p className="text-sm font-semibold text-slate-600">stock</p>
          </div>
          <div className="flex flex-col items-center">
            <FaStar className="text-black" size={22} />
            <p className="text-sm mt-1 font-semibold">4.5</p>
            <p className="text-sm font-semibold text-slate-600">rating</p>
          </div>
          <div className="flex flex-col items-center">
            <PiPlantFill className="text-black" size={22} />
            <p className="text-sm mt-1 font-semibold">30 pcs</p>
            <p className="text-sm font-semibold text-slate-600">sold</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSeed;
