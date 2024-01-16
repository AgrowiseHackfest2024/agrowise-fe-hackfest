"use client";

import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import FarmerCard from "./farmer-card";

const farmersList = [
  {
    id: "1",
    imageUrl: "/landing/farmer-dummy.svg",
    name: "Syawaluddin",
    address: "Jalan Pertanian Baru No. 123, Desa Sejahtera, Kota Dieng",
    seeds: ["Tomato", "Cucumber", "Carrot"],
    area: "2.5 ha",
    type: "Highland",
    rating: 4.5,
  },
  {
    id: "2",
    imageUrl: "/landing/farmer-dummy.svg",
    name: "Syawaluddin",
    address: "Jalan Pertanian Baru No. 123, Desa Sejahtera, Kota Dieng",
    seeds: ["Tomato", "Cucumber", "Carrot"],
    area: "2.5 ha",
    type: "Highland",
    rating: 4.5,
  },
  {
    id: "3",
    imageUrl: "/landing/farmer-dummy.svg",
    name: "Syawaluddin",
    address: "Jalan Pertanian Baru No. 123, Desa Sejahtera, Kota Dieng",
    seeds: ["Tomato", "Cucumber", "Carrot"],
    area: "2.5 ha",
    type: "Highland",
    rating: 4.5,
  },
];

const ListFarmer = () => {
  const [query, setQuery] = useState("");
  const data = farmersList.filter((farmer) =>
    farmer.name.toLowerCase().includes(query.toLowerCase())
  );
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
        {data.map((farmer, index) => (
          <FarmerCard key={index} {...farmer} />
        ))}
      </div>
    </>
  );
};

export default ListFarmer;
