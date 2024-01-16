import Image from "next/image";
import data from "../../../../../public/data/benih.json";
import { AiOutlineHome } from "react-icons/ai";
import { HiChevronRight } from "react-icons/hi";
import { FaStar, FaStarHalf } from "react-icons/fa6";
import Checkout from "./components/checkout";
import Link from "next/link";

const Page = ({
  params,
}: {
  params: {
    farmerId: string;
    seedId: string;
  };
}) => {
  const { seedId, farmerId } = params;
  const benih = data.seeds.find((benih) => benih.id === parseInt(seedId));
  if (!benih) return;

  const Rating = ({ rating }: { rating: number }) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    for (let i = 0; i < 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar size={22} key={i} className="text-yellow-400" />);
      } else if (hasHalfStar && i === fullStars + 1) {
        stars.push(
          <FaStarHalf size={22} key={i} className="text-yellow-400" />
        );
      } else {
        stars.push(<FaStar size={22} key={i} className="text-gray-400" />);
      }
    }
    return <div className="flex gap-[0.1rem]">{stars}</div>;
  };
  return (
    <div className="pb-20 min-h-screen">
      <div className="w-full h-40 pt-16 flex items-center relative justify-start px-[7%] bg-[url('/benih/bgdetail.svg')] bg-no-repeat bg-cover bg-center">
        <div className="flex z-10 text-white font-dm items-center gap-2">
          <AiOutlineHome size={22} />
          <HiChevronRight size={22} />
          <Link href="/" className="hover:underline cursor-pointer">
            Farmers
          </Link>
          <HiChevronRight size={22} />
          <Link
            href={`/${farmerId}`}
            className="hover:underline cursor-pointer"
          >
            Seeds
          </Link>
          <HiChevronRight size={22} />
          <p className="text-green-500">{benih.name}</p>
        </div>
        <div className="w-full h-full backdrop-brightness-50 absolute top-0 left-0"></div>
      </div>
      <div className="container max-w-[80rem] py-20 mx-auto">
        <div className="w-full flex items-start gap-10 relative">
          <div className="w-[70%] flex items-start gap-8">
            <div className="w-[40%] aspect-square sticky top-20 rounded-lg overflow-hidden transition">
              <div className="w-full h-full relative">
                <Image
                  src={benih.image}
                  fill
                  className="w-full h-full object-cover"
                  alt={benih.name}
                />
              </div>
            </div>
            <div className="flex-1">
              <h1 className="font-dm text-5xl font-bold">{benih.name}</h1>
              <div className="flex gap-2 my-2">
                <div className="flex gap-1">
                  <Rating rating={benih.rating} />
                  <p className="ml-1 font-semibold">{benih.rating}</p>
                </div>
                <p className="text-lg text-gray-400">•</p>
                <p className="font-semibold">
                  {benih.sold}{" "}
                  <span className="font-normal text-gray-500">terjual</span>
                </p>
              </div>
              <h2 className="text-3xl font-dm font-semibold text-green-700">
                <span className="text-base">Rp.</span>
                {benih.price.toLocaleString()}
              </h2>
              <hr className="my-3 border-1" />
              <p className="text-base text-gray-500">
                {benih.description}
                <br></br>Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Sit tempora labore facere quo ex repudiandae eius dolores
                esse. Nihil distinctio dicta maiores praesentium optio quibusdam
                veritatis, minima iste temporibus nobis sit et architecto cum
                officiis soluta velit! A, vero harum vitae qui maiores tenetur
                dolor officiis quibusdam laudantium ipsum id rerum illo tempora
                at reiciendis nihil sed alias! Eveniet dicta quidem, numquam
                expedita debitis nesciunt necessitatibus autem ullam, adipisci,
                quos earum optio architecto voluptate quae. Rerum, aperiam!
                Explicabo accusamus eos voluptatem dolor, perferendis rem, autem
                soluta quia similique id labore ad magni sapiente sequi quam
                atque accusantium praesentium recusandae. Et velit totam
                repellat sapiente, consectetur eveniet distinctio laudantium
                dolorum necessitatibus quibusdam excepturi repellendus. Natus
                tempore officia facere dolorum accusantium nesciunt! Illo
                aliquam vero cum labore rerum neque blanditiis eveniet! Repellat
                et veniam commodi veritatis deserunt ducimus laborum harum
                laboriosam natus a vero dicta perspiciatis aliquid suscipit
                debitis, officiis velit culpa esse sit ratione iure. Pariatur
                porro eos facere ipsum, maxime velit odio nemo dolor vel neque!
                Voluptates vero dolore eaque odio, iusto rerum quisquam quaerat
                aliquam quia. Cumque veniam quidem, blanditiis vero sed, totam
                corporis expedita exercitationem error placeat nostrum ratione
                quasi nulla. Voluptas quos, doloribus dolore assumenda minus
                aspernatur?
              </p>
              <hr className="my-3 border-1" />
              <p className="font-semibold">
                Category :{" "}
                <span className="text-gray-500 font-normal font-dm">
                  Vegetables
                </span>
              </p>
              <p className="font-semibold mt-1">
                Tag:{" "}
                <span className="text-gray-500 font-normal font-dm">
                  Vegetables Healthy Potato
                </span>
              </p>
              <hr className="my-3" />
            </div>
          </div>
          <Checkout {...benih} />
        </div>
      </div>
    </div>
  );
};

export default Page;
