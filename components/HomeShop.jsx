import React from "react";
import ShopCard from "./ShopCard";
import { useAppContext } from "@/context/AppContext";

const Homeshops = () => {

  const { shops, router } = useAppContext()

  return (
    <div className="flex flex-col items-center pt-14">
      <p className="text-2xl font-medium text-left w-full">Boutique populaire</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex-col items-center gap-6 mt-6 pb-14 w-full">
        {shops.map((shop, index) => <ShopCard key={index} shop={shop} />)}
      </div>
      <button onClick={() => { router.push('/all-shops') }} className="px-12 py-2.5 border rounded text-gray-500/70 hover:bg-slate-50/90 transition">
        See more
      </button>
    </div>
  );
};

export default Homeshops;
