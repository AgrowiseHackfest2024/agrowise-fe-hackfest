"use client";

import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import HistoryCard from "./history-card";
import { Order } from "@/types/order";

const ListHistory = ({ history }: { history: Order[] }) => {
  const [query, setQuery] = useState("");

  return (
    <>
      <div className="w-full mx-auto my-10 bg-white py-2 px-4 rounded-md shadow-md flex">
        <IoSearch className="text-xl" />
        <input
          type="text"
          className="flex-1 outline-none px-2"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-5 w-full mx-auto">
        {history.map((item, index) => (
          <HistoryCard key={index} order={item}/>
        ))}
      </div>
    </>
  );
};

export default ListHistory;
