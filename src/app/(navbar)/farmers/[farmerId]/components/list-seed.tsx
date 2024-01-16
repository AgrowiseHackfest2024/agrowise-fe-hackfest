"use client";
import { useState } from "react";
import CardSeed, { CardSeedProps } from "./card-seed";
import { IoSearch } from "react-icons/io5";

const ListSeed = ({ seedList }: { seedList: CardSeedProps[] }) => {
  const [query, setQuery] = useState("");
  const data = seedList.filter((seed) =>
    seed.name.toLowerCase().includes(query.toLowerCase())
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
        {data.map((seed) => (
          <CardSeed key={seed.id} {...seed} />
        ))}
      </div>
    </>
  );
};

export default ListSeed;
