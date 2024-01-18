import { Farmer } from "@/types/farmer";
import FarmerCard from "../../farmers/components/farmer-card";
import { cookies } from "next/headers";

const Explore = async () => {
  const token = cookies()?.get("token")?.value;

  const lastOrder = async () => {
    const response = await fetch(process.env.BACKEND_URL + "/orders/last", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
    })

    const data = await response.json();
    return data;
  }

  const getUser = async () => {
    const response = await fetch(process.env.BACKEND_URL + "/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
    })

    const data = await response.json();
    return data;
  }

  const [LastOrderData, getUserData] = await Promise.all([
    lastOrder(),
    getUser()
  ]);

  const fetchFarmersContentBased = async () => {
    const response = await fetch(process.env.ML_URL + "/recommendation/cb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "farmer_id": LastOrderData.data.farmer_id,
        "k": 3
      })
    });

    const data = await response.json();
    return data;
  };

  const fetchFarmersCollaborative = async () => {
    const response = await fetch(process.env.ML_URL + "/recommendation/collab", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "user_id": getUserData.user.id,
        "k": 3
      })
    });

    const data = await response.json();
    return data;
  };

  const [farmersContentBasedData, farmersCollaborativeData] = await Promise.all([
    fetchFarmersContentBased(),
    fetchFarmersCollaborative()
  ]);

  return (
    <div className="bg-[#EEEEEE] w-full">
      <div className="container px-[5%] min-h-screen mx-auto flex flex-col justify-center items-center py-10">
        <h1 className="font-bold text-7xl font-dm text-primary mb-8">
          Explore Farmers
        </h1>

        <div className="w-full">
          <h2 className="text-center text-2xl font-dm text-primary mb-4">
            Because You Ordered From <span className="font-bold">{LastOrderData.data.nama}</span>
          </h2>
          <div className="flex justify-center gap-8">
            {farmersContentBasedData.data.map((farmer: Farmer, index: number) => (
              <FarmerCard key={index} {...farmer} />
            ))}
          </div>
        </div>

        <div className="w-full mt-10">
          <h2 className="text-center text-2xl font-dm text-primary mb-4">
            Recommendation for You
          </h2>
          <div className="flex justify-center gap-8">
            {farmersCollaborativeData.data.map((farmer: Farmer, index: number) => (
              <FarmerCard key={index} {...farmer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
