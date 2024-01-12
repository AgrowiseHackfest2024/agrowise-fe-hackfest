import Image from "next/image";
import { IoMdPricetags } from "react-icons/io";
import { GiJellyBeans } from "react-icons/gi";
import { FaStar } from "react-icons/fa6";
import { PiPlantFill } from "react-icons/pi";
import Link from "next/link";

export interface CardSeedProps {
  farmerId?: number;
  id: number;
  name: string;
  price: number;
  stock: number;
  rating: number;
  sold: number;
  image: string;
  unit: string;
}

const CardSeed = ({
  farmerId,
  id,
  name,
  price,
  stock,
  rating,
  sold,
  image,
  unit,
}: CardSeedProps) => {
  return (
    <Link href={`${farmerId || "seeds"}/${id}`} replace={false} className="w-full max-w-[22rem] bg-white aspect-[381/455] rounded-md overflow-hidden shadow-md hover:scale-[105%] transition cursor-pointer">
      <div className="w-full h-1/2 relative">
        <Image
          src={image}
          fill
          className="w-full h-full object-cover"
          alt={name}
        />
      </div>
      <div className="px-[7%] py-6 flex flex-col justify-between h-1/2">
        <div>
          <h1 className="text-2xl font-semibold font-poppins">{name}</h1>
          <p className="font-semibold text-slate-500">{unit}</p>
        </div>
        <div className="flex justify-between items-end">
          <div className="flex flex-col items-center">
            <IoMdPricetags className="text-black" size={22} />
            <p className="text-sm mt-1 font-semibold font-dm">Rp{price}</p>
            <p className="text-sm font-semibold text-slate-600">price</p>
          </div>
          <div className="flex flex-col items-center">
            <GiJellyBeans className="text-black" size={22} />
            <p className="text-sm mt-1 font-semibold font-dm">{stock} pcs</p>
            <p className="text-sm font-semibold text-slate-600">stock</p>
          </div>
          <div className="flex flex-col items-center">
            <FaStar className="text-black" size={22} />
            <p className="text-sm mt-1 font-semibold font-dm">{rating}</p>
            <p className="text-sm font-semibold text-slate-600">rating</p>
          </div>
          <div className="flex flex-col items-center">
            <PiPlantFill className="text-black" size={22} />
            <p className="text-sm mt-1 font-semibold font-dm">{sold} pcs</p>
            <p className="text-sm font-semibold text-slate-600">sold</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardSeed;
