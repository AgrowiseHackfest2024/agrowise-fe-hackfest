import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const steps = [
  {
    icon: "/landing/logo-1.svg",
    number: "/landing/number-1.svg",
    title: "Choose Your Farmer",
    description:
      "Explore a diverse community of local farmers and choose the one you want to support.",
  },
  {
    icon: "/landing/logo-2.svg",
    number: "/landing/number-2.svg",
    title: "Quality Seeds, Seamless Purchase",
    description: "Purchase premium seeds directly through AgroWise.",
  },
  {
    icon: "/landing/logo-3.svg",
    number: "/landing/number-3.svg",
    title: "Follow the Farming Journey",
    description:
      "Experience the entire farming process! Receive regular updates, photos, and insights from the farmers you support.",
  },
  {
    icon: "/landing/logo-4.svg",
    number: "/landing/number-4.svg",
    title: "Harvest Together",
    description:
      "Celebrate the fruits of sustainable farming! When the harvest season arrives, rejoice with your chosen farmers.",
  },
];

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen bg-[url('/landing/hero-background.svg')] bg-no-repeat bg-cover bg-center">
      <div className="min-h-screen flex container px-[5%] mx-auto text-white">
        <div className="w-[60%] flex flex-col justify-center items-start">
          <h1 className="font-dm text-[7rem] font-bold leading-tight">
            Agrowise
          </h1>
          <h2 className=" font-medium text-gray-400 text-4xl">
            Connecting consumers and farmers in sustainable agriculture
          </h2>
          <button className="bg-primary px-5 py-3 font-semibold font-dm mt-7 text-2xl rounded-md">
            Discover More
            <FaArrowRight className="ml-3 inline-block" />
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 translate-y-[62%] flex w-full justify-center gap-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="w-[20%] aspect-square bg-[#EEEEEE] shadow-md rounded-md p-7 flex flex-col"
          >
            <div className="w-full justify-between flex items-center">
              <div className="w-[25%] aspect-square bg-primary rounded-md flex justify-center items-center">
                <Image src={step.icon} alt="icon" width={50} height={50} />
              </div>
              <Image src={step.number} alt="number" width={70} height={70} />
            </div>
            <h3 className="font-bold text-xl mt-7 mb-3">{step.title}</h3>

            <p className="text-lg font-semibold text-[#595959]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
