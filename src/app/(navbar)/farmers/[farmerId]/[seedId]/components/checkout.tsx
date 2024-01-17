"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { HiPlus, HiMinus, HiOutlinePencil } from "react-icons/hi";
import Cookies from "universal-cookie";

interface CheckoutProps {
  id: string;
  nama: string;
  stok: number;
  harga: number;
  foto: string[];
}

declare global {
  interface Window {
    snap: {
      pay: (token: string) => void;
    };
  }
}

window.snap = window.snap || {};

const Checkout = ({ id, nama, stok, harga, foto }: CheckoutProps) => {
  useEffect(() => {
    const snap = "https://app.sandbox.midtrans.com/snap/snap.js";
    const clientKey = process.env.NEXT_PUBLIC_CLIENT as string;

    const script = document.createElement("script");
    script.src = snap;
    script.setAttribute("data-client-key", clientKey);
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  });

  const [count, setCount] = useState(1);
  const [note, setNote] = useState("");
  const [hasNote, setHasNote] = useState(false);
  const handlePlus = () => {
    if (count < stok) {
      setCount(count + 1);
    }
  };

  const handleMinus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const checkout = async () => {
    const cookies = new Cookies();
    const token = cookies.get("token");

    const data = {
      product_id: id,
      name: nama,
      price: harga,
      quantity: count,
    };

    const response = await fetch(process.env.BACKEND_URL + "/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    window.snap.pay(result.data.token);
  };

  return (
    <div className="flex-1 px-5 py-5 bg-white shadow-lg rounded-lg border-gray-300 border-[1px] sticky top-20">
      <h1 className="font-semibold font-dm text-xl">Atur jumlah dan catatan</h1>
      <div className="flex items-center gap-3 my-3">
        <div className="w-[20%] rounded-lg overflow-hidden aspect-square relative">
          <Image
            src={foto[0]}
            fill
            className="w-full h-full object-cover"
            alt={nama}
          />
        </div>
        <p className="font-dm">{nama}</p>
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
          Stok: <span className="font-semibold">{stok}</span>
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
            <p
              className="text-green-700 font-semibold cursor-pointer mt-2"
              onClick={() => setHasNote(false)}
            >
              Batalkan Catatan
            </p>
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
        <p className="text-gray-500">Subtotal</p>
        <p className="text-lg font-semibold  text-gray-500">
          Rp{(harga * count).toLocaleString()}
        </p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-gray-500">Operational Fee</p>
        <p className="text-lg font-semibold text-gray-500">
          Rp{(harga * count * 0.3).toLocaleString()}
        </p>
      </div>
      <hr className="border-[1px] my-3" />
      <div className="flex justify-between items-center">
        <p className="text-gray-500">Total</p>
        <p className="font-bold font-dm text-xl">
          Rp{(harga * count * 1.3).toLocaleString()}
        </p>
      </div>
      <button
        className="w-full py-2 text-center rounded-full bg-green-700 text-white font-semibold font-dm text-lg mt-5"
        onClick={checkout}
      >
        Checkout
      </button>
    </div>
  );
};

export default Checkout;
