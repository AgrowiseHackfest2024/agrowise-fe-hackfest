import data from "../../../public/data/benih.json";

import ListSeed from "./components/list-seed";

const Page = () => {
  return (
    <div className="py-20 bg-[#D0E8E2] min-h-screen">
      <div className="container px-[7%] mx-auto">
        <h1 className="font-bold text-4xl text-[#075E1A] text-center ">
          Shop Seeds
        </h1>
        <ListSeed seedList={data.seeds} />
      </div>
    </div>
  );
};

export default Page;
