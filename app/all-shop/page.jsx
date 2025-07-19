'use client'
import React, { useState } from "react";
import ShopCard from "@/components/ShopCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAppContext } from "@/context/AppContext";
import AddShopModal from "@/components/AddShopModal";

const AllShops = () => {
  const { shops } = useAppContext();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-start px-6 md:px-16 lg:px-32">
        {/* Titre + bouton */}
        <div className="flex items-center justify-between w-full pt-12">
          <div>
            <p className="text-2xl font-medium">Boutiques</p>
            <div className="w-16 h-0.5 bg-orange-600 rounded-full"></div>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition"
          >
            + Ajouter une Boutique
          </button>
        </div>

        {/* Liste des boutiques */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-12 pb-14 w-full">
          {(shops || []).map((shop, index) => (
            <ShopCard key={index} shop={shop} />
          ))}
        </div>
      </div>
      <Footer />

      {/* Popup modal ajout boutique */}
      <AddShopModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default AllShops;