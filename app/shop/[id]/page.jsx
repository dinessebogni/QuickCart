"use client";
import { useEffect, useState } from "react";
import { assets } from "@/assets/assets";
import ShopCard from "@/components/ShopCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useParams } from "next/navigation";
import Loading from "@/components/Loading";
import { useAppContext } from "@/context/AppContext";

const Shop = () => {
  const { id } = useParams();
  const { shops = [], router, addToCart } = useAppContext();

  const [mainImage, setMainImage] = useState(null);
  const [shopData, setShopData] = useState(null);

  useEffect(() => {
    if (shops.length > 0) {
      const shop = shops.find((s) => s._id === id);
      setShopData(shop || null);
    }
  }, [id, shops]);

  if (!shopData) return <Loading />;

  const images =
    Array.isArray(shopData.image) && shopData.image.length > 0
      ? shopData.image
      : ["/placeholder.png"];

  const displayMainImage = mainImage || images[0];

  return (
    <>
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32 pt-14 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="px-5 lg:px-16 xl:px-20">
            <div className="rounded-lg overflow-hidden bg-gray-500/10 mb-4">
              <Image
                src={displayMainImage}
                alt={shopData.name || "Shop Image"}
                className="w-full h-auto object-cover mix-blend-multiply"
                width={1280}
                height={720}
              />
            </div>

            <div className="grid grid-cols-4 gap-4">
              {images.map((image, i) => (
                <div
                  key={i}
                  onClick={() => setMainImage(image)}
                  className="cursor-pointer rounded-lg overflow-hidden bg-gray-500/10"
                >
                  <Image
                    src={image}
                    alt={shopData.name || "Shop Image"}
                    className="w-full h-auto object-cover mix-blend-multiply"
                    width={1280}
                    height={720}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-3xl font-medium text-gray-800/90 mb-4">
              {shopData.name}
            </h1>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[...Array(4)].map((_, i) => (
                  <Image
                    key={i}
                    className="h-4 w-4"
                    src={assets.star_icon}
                    alt="star_icon"
                  />
                ))}
                <Image
                  className="h-4 w-4"
                  src={assets.star_dull_icon}
                  alt="star_dull_icon"
                />
              </div>
              <p>(4.5)</p>
            </div>
            <p className="text-gray-600 mt-3">{shopData.description}</p>
            <hr className="bg-gray-600 my-6" />
            <div className="overflow-x-auto">
              <table className="table-auto border-collapse w-full max-w-72">
                <tbody>
                  <tr>
                    <td className="text-gray-600 font-medium">Propriétaire</td>
                    <td className="text-gray-800/50">Generic</td>
                  </tr>
                  <tr>
                    <td className="text-gray-600 font-medium">Adresse</td>
                    <td className="text-gray-800/50">Multi</td>
                  </tr>
                  <tr>
                    <td className="text-gray-600 font-medium">Category</td>
                    <td className="text-gray-800/50">{shopData.category}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex items-center mt-10 gap-4">
              <button
                onClick={() => addToCart(shopData._id)}
                className="w-full py-3.5 bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition"
              >
                Ajouter au Favoris
              </button>
              <button
                onClick={() => {
                  addToCart(shopData._id);
                  router.push("/cart");
                }}
                className="w-full py-3.5 bg-orange-500 text-white hover:bg-orange-600 transition"
              >
                Buy now
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center mb-4 mt-16">
            <p className="text-3xl font-medium">
              Featured <span className="font-medium text-orange-600">Shops</span>
            </p>
            <div className="w-28 h-0.5 bg-orange-600 mt-2"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 pb-14 w-full">
            {shops.slice(0, 5).map((shop, index) => (
              <ShopCard key={index} shop={shop} />
            ))}
          </div>
          <button className="px-8 py-2 mb-16 border rounded text-gray-500/70 hover:bg-slate-50/90 transition">
            See more
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;