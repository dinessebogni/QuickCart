import React, { useState } from "react";

const AddShopModal = ({ isOpen, onClose }) => {
  const [shopName, setShopName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [address, setAddress] = useState("");
  const [productType, setProductType] = useState("");
  const [image, setImage] = useState(null);

  if (!isOpen) return null;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Préparer les données (à adapter selon ta gestion des données)
    const formData = {
      shopName,
      ownerName,
      address,
      productType,
      image,
    };

    console.log("Données boutique à ajouter :", formData);

    // Reset et fermer le modal
    setShopName("");
    setOwnerName("");
    setAddress("");
    setProductType("");
    setImage(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md relative max-h-[90vh] overflow-auto">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4 text-center">Ajouter une Boutique</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nom de la boutique</label>
            <input
              type="text"
              name="shopName"
              value={shopName}
              onChange={(e) => setShopName(e.target.value)}
              className="w-full border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Nom du propriétaire</label>
            <input
              type="text"
              name="ownerName"
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
              className="w-full border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Adresse</label>
            <input
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Type de produit</label>
            <input
              type="text"
              name="productType"
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
              className="w-full border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Image de la boutique</label>
            <label
              htmlFor="image-upload"
              className="cursor-pointer inline-block w-full rounded-lg border border-gray-300 px-4 py-2 text-center text-gray-600 hover:border-orange-500 hover:text-orange-600 transition"
            >
              {image ? image.name : "Choisir une image..."}
            </label>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              required
            />
        </div>


          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition"
          >
            Ajouter
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddShopModal;
