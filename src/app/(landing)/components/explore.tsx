import FarmerCard from "./farmer-card";

const Explore = () => {
  return (
    <div className=" bg-[#EEEEEE] w-full">
      <div className="container px-[5%] min-h-screen mx-auto flex flex-col justify-center items-center">
        <h1 className="font-bold text-7xl font-dm text-primary">
          Explore Farmers
        </h1>
        <div className="flex justify-center gap-10 w-full mt-14">
          <FarmerCard
            imageUrl="/landing/farmer-dummy.svg"
            name="Syawaluddin"
            address="Jalan Pertanian Baru No. 123, Desa Sejahtera, Kota Dieng"
            seeds={["Tomato", "Cucumber", "Carrot"]}
            area="2.5 ha"
            type="Highland"
            rating={4.5}
          />
          <FarmerCard
            imageUrl="/landing/farmer-dummy.svg"
            name="Syawaluddin"
            address="Jalan Pertanian Baru No. 123, Desa Sejahtera, Kota Dieng"
            seeds={["Tomato", "Cucumber", "Carrot"]}
            area="2.5 ha"
            type="Highland"
            rating={4.5}
          />
          <FarmerCard
            imageUrl="/landing/farmer-dummy.svg"
            name="Syawaluddin"
            address="Jalan Pertanian Baru No. 123, Desa Sejahtera, Kota Dieng"
            seeds={["Tomato", "Cucumber", "Carrot"]}
            area="2.5 ha"
            type="Highland"
            rating={4.5}
          />
        </div>
      </div>
    </div>
  );
};

export default Explore;
