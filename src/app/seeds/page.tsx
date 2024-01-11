import { IoSearch } from "react-icons/io5";
import CardSeed from "./components/card-seed";

const Page = () => {
  return (
    <div className="py-20 bg-[#D0E8E2]">
      <div className="container px-[7%] mx-auto">
        <h1 className="font-bold text-4xl text-[#075E1A] text-center ">
          Shop Seeds
        </h1>
        <div className="w-full mx-auto my-10 bg-white py-2 px-4 rounded-md shadow-md">
          <IoSearch className="text-xl" />
        </div>
        <div className="flex flex-wrap gap-5 w-full mx-auto justify-center">
          <CardSeed />
          <CardSeed />
          <CardSeed />
          <CardSeed />
          <CardSeed />
          <CardSeed />
        </div>
      </div>
    </div>
  );
};

export default Page;
