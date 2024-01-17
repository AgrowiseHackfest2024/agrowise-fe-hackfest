import ListFarmer from "./components/list-farmer";
import { cookies } from "next/headers";

const Page = async () => {
  const token = cookies()?.get("token")?.value;

  const farmers = await fetch(process.env.BACKEND_URL + "/farmers", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token
    },
  })

  const result = await farmers.json();

  return (
    <div className="pb-20 bg-[#EEEEEE] min-h-screen">
      <div className="w-full h-60 flex items-center relative justify-center bg-[url('/petani/bg-title.jpg')] bg-no-repeat bg-cover bg-[center_top_-18rem]">
        <h1 className="font-bold text-5xl font-dm text-white text-center z-10">
          Our Farmers
        </h1>
        <div className="w-full h-full backdrop-brightness-50 absolute"></div>
      </div>
      <div className="container px-[5%] max-w-[80rem] mx-auto">
        <ListFarmer farmers={result.data} />
      </div>
    </div>
  );
};

export default Page;
