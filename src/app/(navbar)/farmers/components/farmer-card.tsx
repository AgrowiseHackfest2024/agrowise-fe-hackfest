import Image from "next/image";
import Link from "next/link";
import { FaMountainSun, FaArrowsLeftRight, FaStar } from "react-icons/fa6";

interface FarmerCardProps {
  id: string;
  imageUrl: string;
  name: string;
  address: string;
  seeds: string[];
  area: string;
  type: string;
  rating: number;
}
const FarmerCard = ({
  id,
  imageUrl,
  name,
  address,
  seeds,
  area,
  type,
  rating,
}: FarmerCardProps) => {
  return (
    <Link
      href={`/farmers/${id}`}
      className="w-full max-w-[21rem] aspect-[381/520] bg-white-100 rounded-md shadow-md overflow-hidden hover:scale-105 transition"
    >
      <div className="h-[45%] w-full relative">
        <Image
          src={imageUrl}
          fill
          className="w-full h-full object-cover"
          alt="farmer"
        />
      </div>
      <div className="px-[5%] pt-4 pb-5 flex flex-col h-[55%]">
        <h1 className="font-bold font-dm text-xl">{name}</h1>
        <p className="font-medium leading-tight text-base text-gray-600 mt-1 my-3">
          {address}
        </p>
        <div className="flex flex-wrap gap-2">
          {seeds.map((seed, index) => (
            <div
              key={index}
              className="px-1 py-0.5 font-semibold text-sm text-[#75AA43] border-[2px] border-[#75AA43] rounded-md"
            >
              {seed}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 divide-x-2 divide-zinc-200 mt-auto">
          <div className="flex flex-col items-center">
            <FaArrowsLeftRight size={24} />
            <p className="font-semibold font-dm text-[1.1rem] mt-1">{area}</p>
            <p className="text-gray-500 font-medium leading-none">area</p>
          </div>
          <div className="flex flex-col items-center">
            <FaMountainSun size={24} />
            <p className="font-semibold font-dm text-[1.1rem] mt-1">{type}</p>
            <p className="text-gray-500 font-medium leading-none">surface</p>
          </div>
          <div className="flex flex-col items-center">
            <FaStar size={24} />
            <p className="font-semibold font-dm text-[1.1rem] mt-1">{rating}</p>
            <p className="text-gray-500 font-medium leading-none">rating</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FarmerCard;
