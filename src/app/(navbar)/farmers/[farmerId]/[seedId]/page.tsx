import Image from "next/image";
import data from "../../../../../../public/data/benih.json";
import { AiOutlineHome } from "react-icons/ai";
import { HiChevronRight } from "react-icons/hi";
import { FaStar, FaStarHalf } from "react-icons/fa6";
import Checkout from "./components/checkout";
import Link from "next/link";
import { cookies } from "next/headers";
import { calculateAverageRating } from "@/utils/ratingUtils";

const Page = async ({
  params,
}: {
  params: {
    farmerId: string;
    seedId: string;
  };
}) => {
  const { seedId, farmerId } = params;
  const token = cookies()?.get("token")?.value;

  const farmers = await fetch(process.env.BACKEND_URL + "/products/" + seedId, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });

  const result = await farmers.json();

  if (!result.data) return;

  const averageRating = calculateAverageRating(result.data.RatingProduct);

  const Rating = ({ rating }: { rating: number }) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    for (let i = 0; i < 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar size={22} key={i} className="text-yellow-400" />);
      } else if (hasHalfStar && i === fullStars + 1) {
        stars.push(
          <FaStarHalf size={22} key={i} className="text-yellow-400" />
        );
      } else {
        stars.push(<FaStar size={22} key={i} className="text-gray-400" />);
      }
    }
    return <div className="flex gap-[0.1rem]">{stars}</div>;
  };

  return (
    <div className="pb-20 min-h-screen">
      <div className="w-full h-40 pt-16 flex items-center relative justify-start px-[7%] bg-[url('/benih/bgdetail.svg')] bg-no-repeat bg-cover bg-center">
        <div className="flex z-10 text-white font-dm items-center gap-2">
          <AiOutlineHome size={22} />
          <HiChevronRight size={22} />
          <Link href="/farmers" className="hover:underline cursor-pointer">
            Farmers
          </Link>
          <HiChevronRight size={22} />
          <Link
            href={`/farmers/${farmerId}`}
            className="hover:underline cursor-pointer"
          >
            Seeds
          </Link>
          <HiChevronRight size={22} />
          <p className="text-green-500">{result.data.nama}</p>
        </div>
        <div className="w-full h-full backdrop-brightness-50 absolute top-0 left-0"></div>
      </div>
      <div className="container max-w-[80rem] py-20 mx-auto">
        <div className="w-full flex items-start gap-10 relative">
          <div className="w-[70%] flex items-start gap-8">
            <div className="w-[40%] aspect-square sticky top-20 rounded-lg overflow-hidden transition">
              <div className="w-full h-full relative">
                <Image
                  src={result.data.foto[0]}
                  fill
                  className="w-full h-full object-cover"
                  alt={result.data.nama}
                />
              </div>
            </div>
            <div className="flex-1">
              <h1 className="font-dm text-5xl font-bold">{result.data.nama} ({result.data.berat} kg)</h1>
              <div className="flex gap-2 my-2">
                <div className="flex gap-1">
                  <Rating rating={averageRating} />
                  <p className="ml-1 font-semibold">{averageRating}</p>
                </div>
                <p className="text-lg text-gray-400">•</p>
                <p className="font-semibold">
                  {result.data.sold}{" "}
                  <span className="font-normal text-gray-500">terjual</span>
                </p>
              </div>
              <h2 className="text-3xl font-dm font-semibold text-green-700">
                <span className="text-base">Rp.</span>
                {result.data.harga.toLocaleString()}
              </h2>
              <hr className="my-3 border-1" />
              <p className="text-base text-gray-500">{result.data.deskripsi}</p>
              <hr className="my-3 border-1" />
              <p className="font-semibold">
                Category :{" "}
                <span className="text-gray-500 font-normal font-dm">
                  Vegetables
                </span>
              </p>
              <p className="font-semibold mt-1">
                Tag:{" "}
                <span className="text-gray-500 font-normal font-dm">
                  Vegetables Healthy Potato
                </span>
              </p>
              <hr className="my-3" />
            </div>
          </div>
          <Checkout
            id={result.data.id}
            farmer_id={params.farmerId}
            nama={result.data.nama}
            stok={result.data.stok}
            harga={result.data.harga}
            foto={result.data.foto}
            berat={result.data.berat}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
