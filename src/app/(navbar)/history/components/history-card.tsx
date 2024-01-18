"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import SeedPurchased from "./seed-purchased";
import { Order } from "@/types/order";

const HistoryCard = ({ order }: { order: Order }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen((prev) => !prev);
  return (
    <div
      className="w-full p-5 pb-7 bg-white rounded-lg shadow-lg relative cursor-pointer"
      onClick={toggleOpen}
    >
      <div className="flex mb-5">
        <div className="flex gap-3 items-center">
          <div className="w-16 aspect-square bg-gray-400 rounded-full relative overflow-hidden">
            <Image
              src={order.farmer.foto[0]}
              fill
              className="w-full h-full object-cover"
              alt="farmer"
            />
          </div>
          <div>
            <h1 className="font-dm text-xl font-bold">{order.farmer.nama} - Order ID : {order.id}</h1>
            <p className="font-medium text-gray-400">
              {order.farmer.alamat} - {order.farmer.no_telp}
            </p>
          </div>
        </div>
        <div className="flex ml-auto items-center gap-3 text-center">
          <div className="h-[70%] border-[1px] border-gray-200"></div>
          <div className="col-span-2">
            <h1 className="font-semibold text-gray-400">Upcoming Harvest</h1>
            <p className="text-lg font-dm font-bold">June 2024</p>
          </div>
        </div>
      </div>
      <div
        className={`grid ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          } transition-all duration-500 w-full cursor-default`}
      >
        <div className="overflow-hidden w-full">
          <div className="p-5 bg-gray-200/70 rounded-lg flex flex-wrap w-full gap-5 justify-between">
            <SeedPurchased orderItem={order.OrderItem} orderStatus={order.status}/>
          </div>
        </div>
      </div>
      <div
        className={`absolute bg-white rounded-lg bottom-0 left-1/2 -translate-x-1/2 ${isOpen ? "translate-y-1/2 shadow-xl" : "translate-y-0"
          } transition`}
      >
        <div
          className={`rounded-lg px-5 ${isOpen ? "pb-1" : "pb-2"
            } py-1 relative`}
        >
          <FaChevronDown
            size={14}
            className={`text-primary ${isOpen && "rotate-180"
              } transition duration-500`}
          />
          {isOpen && (
            <div className="absolute h-1/2 top-0 w-[120%] left-0 -translate-x-[10%] bg-white -z-10"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
