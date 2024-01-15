import data from "../../../public/data/benih.json";

import ListSeed from "./components/list-seed";

const Page = () => {
  return (
    <div className="pb-20 bg-[#EEEEEE] min-h-screen">
      <div className="w-full h-60 flex items-center relative justify-center bg-[url('/benih/bgtitle.jpg')] bg-no-repeat bg-cover bg-center">
        <h1 className="font-bold tracking-wide text-5xl font-dm text-white text-center z-10">
          Shop Seeds
        </h1>
        <div className="w-full h-full backdrop-brightness-50 absolute"></div>
      </div>
      <div className="container px-[5%] max-w-[80rem] mx-auto">
        <ListSeed seedList={data.seeds} />
      </div>
    </div>
  );
};

export default Page;
