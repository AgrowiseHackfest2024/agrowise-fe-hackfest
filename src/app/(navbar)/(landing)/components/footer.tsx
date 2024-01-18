import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="relative w-full bg-[url('/landing/footer-background.svg')] bg-no-repeat bg-cover bg-center">
      <div className="container mx-auto px-[5%] text-white min-h-[50vh] flex justify-between items-center gap-10">
        <div className="w-[60%]">
          <h1 className="font-bold text-4xl font-dm">
            Ready to embark on a sustainable journey?
          </h1>
          <p className="text-gray-200 mt-3 mb-7 text-xl">
            Join AgroWise now and become a part of the movement toward a
            healthier, more connected, and environmentally conscious world.
          </p>
          <button className="px-5 py-2 bg-primary rounded-md font-dm font-semibold text-lg">
            Create Account
          </button>
        </div>
        <div className="flex-1 bg-white rounded-lg shadow-md py-5 px-7">
          <h1 className="text-black font-semibold text-xl font-dm">
            Subscribe to our newsletter
          </h1>
          <p className="text-black mt-2 mb-4">
            Sign up for weekly update and be the first to know about our
            specials and promotions
          </p>
          <div className="w-full flex relative">
            <input
              type="text"
              className="outline-none rounded-l-lg text-black border-[1px] border-gray-300 flex-1 py-2 pl-10 pr-2"
              id="newsletter"
              placeholder="johndoe@gmail.com"
            />
            <label
              htmlFor="newsletter"
              className="absolute left-2 text-gray-300 top-1/2 -translate-y-1/2"
            >
              <MdEmail size={24} />
            </label>
            <button className="bg-primary px-5 py-2 rounded-r-lg text-white font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
