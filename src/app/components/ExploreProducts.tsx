"use client";

type Product = {
  image: string;
  title: string;
  price: string;
  originalPrice: string;
  discount: string;
  rating: number;
};

export default function ExploreProducts() {
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
  ];

  return (
    <div className="w-full max-w-[1308px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="flex flex-col items-start mb-6">
        {/* Label */}
        <div className="bg-red-500 text-white px-3 py-1 rounded mb-4 text-sm sm:text-base">
          Our Products
        </div>

        {/* Title Section */}
        <div className="flex justify-between items-center w-full">
          <h2 className="text-2xl sm:text-3xl font-bold">Explore Our Products</h2>
        </div>
      </div>

      {/* Content Section - Products Grid */}
      <div className="relative w-full bg-gray-50 rounded-lg p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
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
              <h3 className="mt-4 text-center text-sm font-medium">{product.title}</h3>
              <p className="mt-2 text-red-500 font-bold">{product.price}</p>
              <p className="line-through text-gray-500 text-sm">{product.originalPrice}</p>
              {/* Rating */}
              <div className="flex items-center mt-2">
                <div className="text-yellow-400">★★★★★</div>
                <p className="ml-2 text-sm text-gray-600">({product.rating})</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors">
            <span className="material-icons">arrow_back</span>
          </button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors">
            <span className="material-icons">arrow_forward</span>
          </button>
        </div>

        {/* "View All Products" Button */}
        <div className="flex justify-center mt-8">
          <button className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
}
