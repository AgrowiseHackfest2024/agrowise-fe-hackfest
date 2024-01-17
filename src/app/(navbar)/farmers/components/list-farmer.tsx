"use client";

import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import FarmerCard from "./farmer-card";
import { Farmer } from "@/types/farmer";

const ListFarmer = ({ farmers }: { farmers: Farmer[] }) => {
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
      <div className="flex flex-wrap gap-5 w-full mx-auto justify-between">
        {farmers.map((farmer, index) => (
          <FarmerCard key={index} {...farmer} />
        ))}
      </div>
    </>
  );
};

export default ListFarmer;
