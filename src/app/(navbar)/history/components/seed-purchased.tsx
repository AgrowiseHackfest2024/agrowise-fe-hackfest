import Image from "next/image";
const SeedPurchased = () => {
  return (
    <div className="w-[49%] aspect-[2/1] rounded-lg bg-white overflow-hidden">
      <div className="w-full h-full flex items-center py-5 px-10 gap-12">
        <div className="flex flex-col items-center">
          <div className="w-28 aspect-square rounded-full relative overflow-hidden mb-3">
            <Image
              src={"/benih/jagung.jpg"}
              fill
              className="w-full h-full object-cover"
              alt="farmer"
            />
          </div>
          <h1 className="font-dm font-bold text-lg">Benih Jagung</h1>

          <p className="font-semibold">
            10 <span className="font-dm text-gray-400">x</span> 500kg
          </p>
        </div>
        <div className="flex-1">
          <div className="flex justify-between mt-auto w-full">
            <p className="font-semibold text-gray-400">Price</p>
            <p className="font-semibold font-dm">Rp100.000</p>
          </div>
          <div className="flex justify-between w-full">
            <p className="font-semibold text-gray-400">Status</p>
            <p className="font-semibold font-dm">In Progress</p>
          </div>
          <div className="justify-between w-full mt-6 text-center">
            <p className="font-semibold text-gray-400">Planting Session</p>
            <p className="font-semibold font-dm">Aug 2024</p>
          </div>
          <div className="justify-between w-full text-center mt-1">
            <p className="font-semibold text-gray-400">Upcoming Harvest</p>
            <p className="font-semibold font-dm">Dec 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeedPurchased;
