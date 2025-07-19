"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useClerk } from "@clerk/nextjs";
import { useAppContext } from "@/context/AppContext";
import { assets } from "@/assets/assets";
import {
  HomeIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  PhoneIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const { isSeller, router } = useAppContext();
  const { openSignIn } = useClerk();
  const routerNext = useRouter();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false); // pour desktop search toggle
  const [searchTerm, setSearchTerm] = useState("");

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      routerNext.push(`/search?query=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
      setShowSearch(false);      // desktop search close
      setIsMobileMenuOpen(false); // mobile menu close aussi si ouvert
    }
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white text-gray-700 relative">
      <Image
        className="w-12 cursor-pointer"
        onClick={() => router.push("/")}
        src={assets.logo2}
        alt="logo"
      />

      {/* Desktop nav links */}
      <div className="hidden md:flex items-center gap-10">
        <Link href="/" className="flex items-center gap-1 hover:text-gray-900">
          <HomeIcon className="h-5 w-5" />
          Home
        </Link>
        <Link
          href="/all-shop"
          className="flex items-center gap-1 hover:text-gray-900"
        >
          <ShoppingBagIcon className="h-5 w-5" />
          Shop
        </Link>
        <Link href="/cart" className="flex items-center gap-1 hover:text-gray-900">
          <ShoppingCartIcon className="h-5 w-5" />
          Cart
        </Link>
        <Link
          href="/contact"
          className="flex items-center gap-1 hover:text-gray-900"
        >
          <PhoneIcon className="h-5 w-5" />
          Contact
        </Link>
      </div>

      {/* Desktop search icon and input toggle + Seller Dashboard regroupés */}
      <div className="hidden md:flex items-center gap-3 relative">
        {showSearch ? (
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center gap-1"
          >
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
              className="border border-gray-300 rounded px-2 py-1 text-sm"
              placeholder="Rechercher..."
            />
            <button type="submit" className="text-sm text-blue-600 px-1">
              OK
            </button>
          </form>
        ) : (
          <button onClick={() => setShowSearch(true)}>
            <Image
              className="w-4 h-4"
              src={assets.search_icon}
              alt="search icon"
            />
          </button>
        )}
      
        {/* Seller Dashboard placé juste à côté de la recherche */}
        {isSeller && (
          <button
            onClick={() => router.push("/seller")}
            className="text-xs border px-4 py-1.5 rounded-full"
          >
            Seller Dashboard
          </button>
        )}

        {/* compte utilisateur */}
        <button
          onClick={openSignIn}
          className="flex items-center gap-2 hover:text-gray-900 transition"
        >
          <Image src={assets.user_icon} alt="user icon" />
          <span className="hidden md:inline">Account</span>
        </button>
      </div>

      <button onClick={toggleMenu} className="md:hidden">
        {isMobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md z-50 py-4 px-6 flex flex-col gap-4 md:hidden">
          {/* Recherche dans menu mobile */}
          <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
              className="flex-grow border border-gray-300 rounded px-3 py-2 text-base"
              placeholder="Rechercher..."
            />
            <button
              type="submit"
              className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition"
            >
              OK
            </button>
          </form>

          <Link
            href="/"
            onClick={toggleMenu}
            className="flex items-center gap-2 hover:text-gray-900"
          >
            <HomeIcon className="h-5 w-5" /> Home
          </Link>
          <Link
            href="/all-shop"
            onClick={toggleMenu}
            className="flex items-center gap-2 hover:text-gray-900"
          >
            <ShoppingBagIcon className="h-5 w-5" /> Shop
          </Link>
          <Link
            href="/cart"
            onClick={toggleMenu}
            className="flex items-center gap-2 hover:text-gray-900"
          >
            <ShoppingCartIcon className="h-5 w-5" /> Cart
          </Link>
          <Link
            href="/contact"
            onClick={toggleMenu}
            className="flex items-center gap-2 hover:text-gray-900"
          >
            <PhoneIcon className="h-5 w-5" /> Contact
          </Link>

          {isSeller && (
            <button
              onClick={() => {
                setIsMobileMenuOpen(false); // pour fermer le menu après clic
                router.push("/seller");
              }}
              className="text-xs px-2 py-0.5 rounded-full border border-gray-300 whitespace-nowrap max-w-[200px] overflow-hidden text-ellipsis"
            >
              Seller Dashboard
            </button>
          )}
      
          {/* Bouton Compte */}
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault(); // empêche le scroll en haut de page
              setIsMobileMenuOpen(false);
              openSignIn();
            }}
            className="flex items-center gap-2 hover:text-gray-900"
          >
            <Image src={assets.user_icon} alt="user icon" className="h-5 w-5" />
            <span>Compte</span>
          </Link>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
