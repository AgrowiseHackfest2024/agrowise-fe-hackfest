import Image from "next/image";

const value = [
  {
    logo: "/landing/key-1.svg",
    title: "Community Engagement",
    description:
      "AgroWise builds connections between consumers and farmers, fostering a sense of community. Join us on the journey to sustainable and conscious living.",
  },
  {
    logo: "/landing/key-2.svg",
    title: "Transparency and Trust",
    description:
      "We prioritize transparency. See exactly where your food comes from and how it's grown. Trust in the authenticity of your produce.",
  },
  {
    logo: "/landing/key-3.svg",
    title: "Sustainability",
    description:
      "By choosing AgroWise, you're actively supporting local farmers and sustainable agricultural practices. Make a positive impact with every choice.",
  },
];
const KeyValue = () => {
  return (
    <div className="bg-secondary w-full pt-56">
      <div className="min-h-screen container mx-auto px-[5%] flex flex-col items-center justify-center">
        <h1 className="text-primary text-7xl font-bold font-dm">
          Why AgroWise?
        </h1>
        <div className="w-full flex justify-around mt-10 gap-10">
          {value.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-40 aspect-square relative">
                <Image
                  src={item.logo}
                  alt="icon"
                  fill
                  className="w-full h-full object-contain"
                />
              </div>
              <h1 className="mt-5 mb-3 text-primary font-bold text-2xl">
                {item.title}
              </h1>
              <p className="text-lg font-semibold text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyValue;
