"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

type Product = {
  image: string;
  title: string;
};

export default function Categories() {
  const products: Product[] = [
    {
      image: "/Category-CellPhone.png",
      title: "Phones",
    },
    {
      image: "/Category-Computer.png",
      title: "Computer",
    },
    {
      image: "/Category-SmartWatch.png",
      title: "SmartWatch",
    },
    {
      image: "/C.png",
      title: "Camera",
    },
    {
      image: "/Category-Headphone.png",
      title: "Headphone",
    },
    {
        image: "/Category-Gamepad.png",
        title: "Gamepad",
      }
  ];

  return (
    <div className="w-full max-w-[1308px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="flex flex-col items-start mb-6">
        {/* Today's Label */}
        <div className="bg-red-500 text-white px-3 py-1 rounded mb-4 text-sm sm:text-base">
          Categories
        </div>

        {/* Flash Sales and Navigation */}
        <div className="flex flex-wrap justify-between items-center w-full gap-4">
          {/* Left Section: Flash Sales Title */}
          <h2 className="text-2xl sm:text-3xl font-bold">Browse By Category</h2>

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 border rounded-lg shadow-md bg-white hover:bg-red-700"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full max-w-[56px] h-[56px] object-contain"
              />
              {/* Product Info */}
              <h3 className="mt-4 text-center text-sm font-medium">
                {product.title}
              </h3>
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

      
      </div>
    </div>
  );
}
