"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <>
      {/* Top banner */}
      <div className="w-full h-10 bg-black text-white text-sm flex items-center justify-center px-4">
        <div className="text-center">
          <span className="hidden md:inline-block">
            Summer Sale! Free Delivery - 50% OFF!
          </span>
          <span className="inline-block md:hidden">
            Sale! 50% OFF - Shop Now!
          </span>
          <Link
            href="/"
            className="font-semibold underline ml-2 hover:text-gray-200 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <div className="w-full border-b py-2">
        <div className="max-w-[1170px] mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <div className="text-lg md:text-xl font-bold">Exclusive</div>

          {/* Hamburger for Mobile */}
          <button
            className="block md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Links - Visible on larger screens */}
          <div className="hidden md:flex gap-x-6 text-sm">
            <Link href="/Home" className="hover:underline">
              Home
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/signup" className="hover:underline">
              Sign Up
            </Link>
          </div>

          {/* Search and Icons */}
          <div className="hidden md:flex items-center gap-x-6">
            {/* Search */}
            <div className="relative w-48 bg-gray-200 rounded-md flex items-center px-2">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-2 py-1 text-sm bg-transparent focus:outline-none"
              />
              <Image
                src="/search.png"
                width={20}
                height={20}
                alt="Search"
                className="cursor-pointer"
              />
            </div>

            {/* Wishlist Icon */}
            <Image
              src="/heart.png"
              width={20}
              height={20}
              alt="Wishlist"
              className="cursor-pointer"
            />

            {/* Cart Icon */}
            <Image
              src="/cart.png"
              width={20}
              height={20}
              alt="Cart"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 w-full py-4 px-6">
          <div className="flex flex-col gap-4 text-sm">
            <Link href="/Home" className="hover:underline">
              Home
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/signup" className="hover:underline">
              Sign Up
            </Link>

            {/* Search Bar in Mobile */}
            <div className="relative w-full bg-gray-200 rounded-md flex items-center px-2 mt-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-2 py-1 text-sm bg-transparent focus:outline-none"
              />
              <Image
                src="/search.png"
                width={20}
                height={20}
                alt="Search"
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
