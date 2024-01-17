import Image from "next/image";
import { IoMdPricetags } from "react-icons/io";
import { GiJellyBeans } from "react-icons/gi";
import { FaStar } from "react-icons/fa6";
import { PiPlantFill } from "react-icons/pi";
import Link from "next/link";
import { Product } from "@/types/product";
import { calculateAverageRating } from "@/utils/ratingUtils";

interface CardSeedProps extends Product {
  farmerId: string;
}

const CardSeed = ({
  id,
  nama,
  deskripsi,
  stok,
  harga,
  foto,
  sold,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  RatingProduct,
  OrderItem,
  farmerId
}: CardSeedProps) => {
  const averageRating = calculateAverageRating(RatingProduct);

  return (
    <Link
      href={`${farmerId || "seeds"}/${id}`}
      replace={false}
      className="w-full max-w-[22rem] bg-white aspect-[381/455] rounded-md overflow-hidden shadow-md hover:scale-[105%] transition cursor-pointer"
    >
      <div className="w-full h-1/2 relative">
        <Image
          src={foto[0]}
          fill
          className="w-full h-full object-cover"
          alt={nama}
        />
      </div>
      <div className="px-[7%] py-6 flex flex-col justify-between h-1/2">
        <div>
          <h1 className="text-2xl font-semibold font-dm">{nama}</h1>
          <p className="font-semibold text-slate-500">{deskripsi}</p>
        </div>
        <div className="flex justify-between items-end">
          <div className="flex flex-col items-center">
            <IoMdPricetags className="text-black" size={22} />
            <p className="text-sm mt-1 font-semibold font-dm">Rp{harga}</p>
            <p className="text-sm font-semibold text-slate-600">price</p>
          </div>
          <div className="flex flex-col items-center">
            <GiJellyBeans className="text-black" size={22} />
            <p className="text-sm mt-1 font-semibold font-dm">{stok} pcs</p>
            <p className="text-sm font-semibold text-slate-600">stock</p>
          </div>
          <div className="flex flex-col items-center">
            <FaStar className="text-black" size={22} />
            <p className="text-sm mt-1 font-semibold font-dm">{averageRating}</p>
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
