import { Farmer } from "@/types/farmer";
import { RatingFarmer } from "@/types/ratingFarmer";
import Image from "next/image";
import Link from "next/link";
import { FaMountainSun, FaArrowsLeftRight, FaStar } from "react-icons/fa6";

const FarmerCard = ({
  id,
  nama,
  alamat,
  luas_lahan,
  no_telp,
  jenis_sawah,
  foto,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  RatingFarmer,
  Products
}: Farmer) => {
  const calculateAverageRating = (ratings: RatingFarmer[]) => {
    if (ratings.length === 0) return 0;

    const totalRating = ratings.reduce((sum, rating) => sum + rating.rating, 0);
    return totalRating / ratings.length;
  };

  const averageRating = calculateAverageRating(RatingFarmer);

  return (
    <Link
      href={`/farmers/${id}`}
      className="w-full max-w-[21rem] aspect-[381/520] bg-white-100 rounded-md shadow-md overflow-hidden hover:scale-105 transition"
    >
      <div className="h-[45%] w-full relative">
        <Image
          src={foto[0]}
          fill
          className="w-full h-full object-cover"
          alt="farmer"
        />
      </div>
      <div className="px-[5%] pt-4 pb-5 flex flex-col h-[55%]">
        <h1 className="font-bold font-dm text-xl">{nama}</h1>
        <p className="font-medium leading-tight text-base text-gray-600 mt-1 my-3">
          {alamat}
        </p>
        <div className="flex flex-wrap gap-2">
          {Products.map((product, index) => (
            <div
              key={index}
              className="px-1 py-0.5 font-semibold text-sm text-[#75AA43] border-[2px] border-[#75AA43] rounded-md"
            >
              {product.nama}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 divide-x-2 divide-zinc-200 mt-auto">
          <div className="flex flex-col items-center">
            <FaArrowsLeftRight size={24} />
            <p className="font-semibold font-dm text-[1.1rem] mt-1">{luas_lahan} ha</p>
            <p className="text-gray-500 font-medium leading-none">area</p>
          </div>
          <div className="flex flex-col items-center">
            <FaMountainSun size={24} />
            <p className="font-semibold font-dm text-[1.1rem] mt-1">{jenis_sawah}</p>
            <p className="text-gray-500 font-medium leading-none">surface</p>
          </div>
          <div className="flex flex-col items-center">
            <FaStar size={24} />
            <p className="font-semibold font-dm text-[1.1rem] mt-1">{averageRating}</p>
            <p className="text-gray-500 font-medium leading-none">rating</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FarmerCard;
