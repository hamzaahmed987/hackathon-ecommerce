"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type TimeLeft = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

type Product = {
  image: string;
  title: string;
  price: string;
  originalPrice: string;
  discount: string;
  rating: number;
};

export default function Products() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: "03",
    hours: "23",
    minutes: "19",
    seconds: "56",
  });

  const products: Product[] = [
    {
      image: "/gamepad.png",
      title: "HAVIT HV-G92 Gamepad",
      price: "$120",
      originalPrice: "$160",
      discount: "-40%",
      rating: 88,
    },
    {
      image: "/keyboard.png",
      title: "AK-900 Wired Keyboard",
      price: "$960",
      originalPrice: "$1160",
      discount: "-35%",
      rating: 75,
    },
    {
      image: "/screen.png",
      title: "IPS LCD Gaming Monitor",
      price: "$370",
      originalPrice: "$400",
      discount: "-30%",
      rating: 99,
    },
    {
      image: "/chair.png",
      title: "S-Series Comfort Chair",
      price: "$375",
      originalPrice: "$400",
      discount: "-25%",
      rating: 99,
    },
    {
      image: "/chair.png",
      title: "S-Series Comfort Chair",
      price: "$375",
      originalPrice: "$400",
      discount: "-25%",
      rating: 99,
    },
  ];

  return (
    <div className="w-full max-w-[1308px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="flex flex-col items-start mb-6">
        {/* Today's Label */}
        <div className="bg-red-500 text-white px-3 py-1 rounded mb-4 text-sm sm:text-base">
          Today&apos;s
        </div>

        {/* Flash Sales, Timer, and Navigation */}
        <div className="flex flex-wrap justify-between items-center w-full gap-4">
          {/* Left Section: Flash Sales and Timer */}
          <div className="flex items-center gap-4 flex-wrap">
            {/* Flash Sales Title */}
            <h2 className="text-2xl sm:text-3xl font-bold">Flash Sales</h2>

            {/* Timer Section */}
            <div className="flex items-center gap-2 sm:gap-4 ml-0 sm:ml-4">
              {["days", "hours", "minutes", "seconds"].map((unit) => (
                <div
                  key={unit}
                  className="flex flex-col items-center text-center"
                >
                  <span className="text-lg sm:text-2xl font-bold">
                    {timeLeft[unit as keyof TimeLeft]}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-600 capitalize">
                    {unit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section: Navigation Arrows */}
          <div className="hidden sm:flex gap-2">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Content Section - Products Grid */}
      <div className="relative w-full bg-gray-50 rounded-lg p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 border rounded-lg shadow-md bg-white"
            >
              {/* Discount Badge */}
              <div className="self-start bg-red-500 text-white text-xs px-2 py-1 rounded">
                {product.discount}
              </div>
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full max-w-[172px] h-[152px] object-contain"
              />
              {/* Product Info */}
              <h3 className="mt-4 text-center text-sm font-medium">
                {product.title}
              </h3>
              <p className="mt-2 text-red-500 font-bold">{product.price}</p>
              <p className="line-through text-gray-500 text-sm">
                {product.originalPrice}
              </p>
              {/* Rating */}
              <div className="flex items-center mt-2">
                <div className="text-yellow-400">★★★★★</div>
                <p className="ml-2 text-sm text-gray-600">({product.rating})</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows for Mobile */}
        <div className="absolute right-4 bottom-4 flex sm:hidden gap-2">
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* View All Button */}
        <div className="flex justify-center my-6">
          <button className="px-4 py-2 sm:px-6 sm:py-3 bg-red-500 text-white rounded-md hover:bg-red-600">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
}
