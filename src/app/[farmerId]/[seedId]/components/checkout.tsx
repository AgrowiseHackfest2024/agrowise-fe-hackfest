"use client";

import Image from "next/image";
import { useState } from "react";
import { HiPlus, HiMinus, HiOutlinePencil } from "react-icons/hi";
interface CheckoutProps {
  name: string;
  stock: number;
  price: number;
  image: string;
}

const Checkout = ({ name, stock, price, image }: CheckoutProps) => {
  const [count, setCount] = useState(1);
  const [note, setNote] = useState("");
  const [hasNote, setHasNote] = useState(false);
  const handlePlus = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleMinus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div className="flex-1 px-5 py-5 bg-white shadow-lg rounded-lg border-gray-300 border-[1px] sticky top-20">
      <h1 className="font-semibold font-dm text-xl">Atur jumlah dan catatan</h1>
      <div className="flex items-center gap-3 my-3">
        <div className="w-[20%] rounded-lg overflow-hidden aspect-square relative">
          <Image
            src={image}
            fill
            className="w-full h-full object-cover"
            alt={name}
          />
        </div>
        <p className="font-poppins">{name}</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div
            className="w-8 aspect-square rounded-full border-2 border-green-700 flex items-center justify-center cursor-pointer"
            onClick={handleMinus}
          >
            <HiMinus />
          </div>
          <p>{count}</p>
          <div
            className="w-8 aspect-square rounded-full border-2 border-green-700 flex items-center justify-center cursor-pointer"
            onClick={handlePlus}
          >
            <HiPlus />
          </div>
        </div>
        <p>
          Stok: <span className="font-semibold">{stock}</span>
        </p>
      </div>
      <div className="my-4">
        {hasNote ? (
          <div className="w-full">
            <input
              type="text"
              className="w-full outline-none border-2 border-green-700 rounded-lg py-2 px-3"
              onChange={(e) => setNote(e.target.value)}
              value={note}
              placeholder="Contoh: Biji yang bagus"
            />
            <p className="text-green-700 font-semibold cursor-pointer mt-2" onClick={() => setHasNote(false)}>Batalkan Catatan</p>
          </div>
        ) : (
          <div
            className="flex items-center text-green-700 gap-2 cursor-pointer"
            onClick={() => setHasNote(true)}
          >
            <HiOutlinePencil />
            <p className="font-semibold">Tambahkan Catatan</p>
          </div>
        )}
      </div>
      <hr className="my-3" />
      <div className="flex justify-between items-center">
        <p className="text-gray-500">Total</p>
        <p className="font-bold font-dm text-xl">
          Rp{(price * count).toLocaleString()}
        </p>
      </div>
      <div className="w-full py-2 text-center rounded-full bg-green-700 text-white font-semibold font-poppins text-lg mt-5">
        Checkout
      </div>
    </div>
  );
};

export default Checkout;
