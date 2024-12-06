import Image from 'next/image';

export default function HeroSection() {
    return (
      <div className="flex flex-col lg:flex-row w-full max-w-[1109px] mx-auto gap-4 p-4">
        {/* Navigation Links */}
        <div className="w-full lg:w-[217px] flex flex-col space-y-2 lg:space-y-4 p-2 lg:p-4 bg-white rounded-lg shadow-md">
  {[
    { name: "Woman's Fashion", showArrow: true },
    { name: "Men's Fashion", showArrow: true },
    { name: "Electronics", showArrow: false },
    { name: "Home & Lifestyle", showArrow: false },
    { name: "Medicine", showArrow: false },
    { name: "Sports & Outdoor", showArrow: false },
    { name: "Baby's & Toys", showArrow: false },
    { name: "Groceries & Pets", showArrow: false },
    { name: "Health & Beauty", showArrow: false },
  ].map((link, index) => (
    <a
      key={index}
      href="#"
      className="text-sm lg:text-base text-gray-700 hover:text-primary transition-colors flex items-center justify-between"
    >
      <span>{link.name}</span>
      {link.showArrow && (
        <div className="w-6 h-6"> {/* Placeholder for your arrow image */}
          {/* Add your image here */}
          <Image src="/DropDown.png" alt="Arrow" width={20} height={20}></Image>


        </div>
      )}
    </a>
  ))}
</div>

  
        {/* Right Banner */}
        <div className="relative w-full lg:w-[892px] bg-black rounded-lg overflow-hidden shadow-md">
          {/* Content */}
          <div className="absolute inset-0 p-4 lg:p-8 flex flex-col justify-center text-white text-center lg:text-left">
            {/* Brand Logo */}
            <div className="flex items-center justify-center lg:justify-start mb-2">
              <Image
                src="apple.png"
                alt="Brand Logo"
                className="w-6 h-6 lg:w-8 lg:h-8 mr-2 mb-5"
              ></Image>
              <h4 className="text-lg lg:text-xl mb-3">iPhone 14 Series</h4>
            </div>
  
            {/* Heading */}
            <h1 
  className="
    text-[24px] sm:text-[28px] md:text-[30px] lg:text-[40px] 
    font-semibold 
    max-w-[180px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[294px] 
    max-h-[130px] 
    mb-2 sm:mb-3 md:mb-4 
    leading-snug sm:leading-relaxed lg:leading-tight 
    text-center lg:text-left mx-auto lg:mx-0
  "
>
  Up to 10% 
  <br />
  off Voucher
</h1>



  
            {/* CTA Button */}
            <a
              href="#"
              className="inline-flex items-center justify-center lg:justify-start text-sm lg:text-lg hover:underline"
            >
              Shop Now
              <span className="ml-2">→</span>
            </a>
          </div>
  
          {/* Banner Image */}

          <Image src="/brand.png" alt="iPhone 14" className="w-full lg:w-auto h-auto lg:h-full object-cover lg:object-contain lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 mt-4 lg:mt-0 rounded-b-lg lg:rounded-none" width={20} height={20}></Image>



          
  
          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {[...Array(5)].map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === 2 ? "bg-white" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
