import HistoryCard from "./components/history-card";
import ListHistory from "./components/list-history";
import { cookies } from "next/headers";

const Page = async () => {
  const token = cookies()?.get("token")?.value;

  const orders = await fetch(process.env.BACKEND_URL + "/orders", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });

  const result = await orders.json();

  return (
    <div className="pb-20 bg-[#EEEEEE] min-h-screen">
      <div className="w-full h-60 flex items-center relative justify-center bg-[url('/history/bg-title.jpg')] bg-no-repeat bg-cover bg-[center_top_-30rem]">
        <h1 className="font-bold text-5xl font-dm text-white text-center z-10">
          History
        </h1>
        <div className="w-full h-full backdrop-brightness-50 absolute"></div>
      </div>
      <div className="container px-[5%] max-w-[80rem] mx-auto">
        <ListHistory history={result.data}/>
      </div>
    </div>
  );
};

export default Page;
