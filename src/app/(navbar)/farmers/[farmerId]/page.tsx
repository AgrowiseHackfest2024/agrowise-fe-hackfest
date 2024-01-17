import Link from "next/link";
import data from "../../../../../public/data/benih.json";

import ListSeed from "./components/list-seed";
import { AiOutlineHome } from "react-icons/ai";
import { HiChevronRight } from "react-icons/hi";
import Image from "next/image";
import { FaMountainSun, FaArrowsLeftRight, FaStar } from "react-icons/fa6";
import { PiPlantBold } from "react-icons/pi";
import { GiGrain } from "react-icons/gi";
import { cookies } from "next/headers";
import { RatingFarmer } from "@/types/ratingFarmer";
import { calculateAverageRating } from "@/utils/ratingUtils";

const Page = async ({ params, }: { params: { farmerId: string }; }) => {
  const token = cookies()?.get("token")?.value;

  const farmers = await fetch(process.env.BACKEND_URL + "/farmers/" + params.farmerId, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token
    },
  })

  const result = await farmers.json();

  const averageRating = calculateAverageRating(result.data.RatingFarmer);

  return (
    <div className="pb-20 bg-[#EEEEEE] min-h-screen">
      <div className="w-full h-40 pt-16 flex items-center relative bg-[url('/benih/bg-title.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="container max-w-[80rem] mx-auto flex z-10 text-white font-dm items-center gap-2">
          <AiOutlineHome size={22} />
          <HiChevronRight size={22} />
          <Link href="/farmers" className="hover:underline cursor-pointer">
            Farmers
          </Link>
          <HiChevronRight size={22} />
          <p className="text-green-500">{result.data.nama}</p>
        </div>
        <div className="inset-0 backdrop-brightness-[30%] absolute"></div>
      </div>
      <div className="container max-w-[80rem] mx-auto relative">
        <div className="w-[80%] my-9">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold font-dm">{result.data.nama}</h1>
            <Image
              src={"/benih/medal.png"}
              width={25}
              height={25}
              alt="medal"
            />
          </div>
          <p className="text-lg text-gray-500 mt-2">
            {result.data.alamat} - {result.data.no_telp}
          </p>
          <div className="flex gap-10 my-5">
            <div className="flex flex-col gap-2 flex-1">
              <h1 className="font-dm font-semibold text-xl">Detail</h1>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center text-gray-500">
                  <FaArrowsLeftRight size={24} />
                  <p className="font-semibold">Area</p>
                </div>
                <p className="font-bold font-dm text-lg">{result.data.luas_lahan} ha</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center text-gray-500">
                  <FaMountainSun size={24} />
                  <p className="font-semibold">Surface</p>
                </div>
                <p className="font-bold font-dm text-lg">{result.data.jenis_sawah}</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center text-gray-500">
                  <FaStar size={24} />
                  <p className="font-semibold">Rating</p>
                </div>
                <p className="font-bold font-dm text-lg">{averageRating}</p>
              </div>
            </div>
            <div className="flex-1">
              <h1 className="font-dm font-semibold text-xl">Session</h1>
              <div className="flex gap-6 justify-start items-center mt-2">
                <div className="flex-1 p-5 bg-white shadow-md rounded-lg">
                  <PiPlantBold size={24} className="text-green-500" />
                  <p className="font-semibold my-2">Upcoming Harvest</p>
                  <p className="text-gray-500">September 2024</p>
                </div>
                <div className="flex-1 p-5 bg-white shadow-md rounded-lg">
                  <GiGrain size={24} className="text-amber-700" />
                  <p className="font-semibold my-2">Planting Session</p>
                  <p className="text-gray-500">July 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 -translate-y-[55%]">
          <div className="w-40 aspect-square bg-white rounded-full border-8 border-[#EEEEEE] relative overflow-hidden">
            <Image
              src={result.data.foto[0]}
              fill
              className="w-full h-full object-cover"
              alt="Farmer"
            />
          </div>
        </div>
        <div className="flex relative w-52">
          <div className="py-3 flex-1 text-center font-semibold text-lg">
            Seeds
          </div>
          <div className="py-3 flex-1 text-center font-semibold text-lg">
            Reviews
          </div>
          <div className="absolute h-[0.3rem] rounded-t-xl bg-green-700 w-1/2 bottom-0 left-0"></div>
        </div>
        <hr className="border-[1px] text-gray-400" />
        <ListSeed seedList={result.data.Products} farmerId={result.data.id} />
      </div>
    </div>
  );
};

export default Page;
