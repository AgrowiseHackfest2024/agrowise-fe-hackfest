import { Farmer } from "@/types/farmer";
import FarmerCard from "../../farmers/components/farmer-card";
import getUser from "@/utils/getUser";

const Explore = async () => {
  const user = await getUser();

  const farmers = await fetch(process.env.BACKEND_URL + "/farmers", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })

  const result = await farmers.json();

  if (!user || !user.data || !user.token) {

    return (
      <div className="bg-[#EEEEEE] w-full">
        <div className="container px-[5%] min-h-screen mx-auto flex flex-col justify-center items-center py-10">
          <h1 className="font-bold text-7xl font-dm text-primary mb-8">
            Explore Farmers
          </h1>
          <div className="flex justify-center gap-8">
            {result.data.slice(0, 3).map((farmer: Farmer, index: number) => (
              <FarmerCard key={index} {...farmer} />
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    const lastOrder = async () => {
      const response = await fetch(process.env.BACKEND_URL + "/orders/last", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + user.token
        },
      })

      const data = await response.json();

      if (response.status === 200) {
        return data;
      }

      return null;
    }

    const lastOrderData = await lastOrder();

    const fetchFarmersContentBased = async () => {
      if (!lastOrderData || !lastOrderData.data || !lastOrderData.data.farmer_id) {
        return null;
      }
      const response = await fetch(process.env.ML_URL + "/recommendation/cb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "farmer_id": lastOrderData.data.farmer_id,
          "k": 3
        })
      });

      if (!response.ok) {
        return null;
      }

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
          "user_id": user.data.user.id,
          "k": 3
        })
      });

      if (!response.ok) {
        return null;
      }

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
          {farmersContentBasedData !== null ? (
            <div className="w-full">
              <h2 className="text-center text-2xl font-dm text-primary mb-4">
                Because You Ordered From <span className="font-bold">{lastOrderData.data.nama}</span>
              </h2>
              <div className="flex justify-center gap-8">
                {farmersContentBasedData.data.map((farmer: Farmer, index: number) => (
                  <FarmerCard key={index} {...farmer} />
                ))}
              </div>
            </div>
          ) : (
            <div className="w-full">
              <div className="flex justify-center gap-8">
                {result.data.slice(0, 3).map((farmer: Farmer, index: number) => (
                  <FarmerCard key={index} {...farmer} />
                ))}
              </div>
            </div>
          )}

          {farmersCollaborativeData !== null ? (
            <div className="w-full mt-10">
              <h2 className="text-center text-2xl font-dm text-primary mb-4">
                Recommendation for You
              </h2>
              <div className="flex justify-center gap-8">
                {farmersCollaborativeData.data.slice(0, 3).map((farmer: Farmer, index: number) => (
                  <FarmerCard key={index} {...farmer} />
                ))}
              </div>
            </div>
          ) : (
            <div className="w-full mt-10">
              <div className="flex justify-center gap-8">
                {result.data.slice(0, 3).map((farmer: Farmer, index: number) => (
                  <FarmerCard key={index} {...farmer} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

};

export default Explore;
