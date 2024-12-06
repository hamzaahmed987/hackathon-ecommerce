"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {/* Exclusive Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">Exclusive</h2>
            <p className="mb-2">Subscribe</p>
            <p className="mb-4 text-sm">Get 10% off your first order</p>
            <div className="flex items-center bg-gray-800 rounded-md overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-sm text-gray-300 pl-4 py-2 flex-1 focus:outline-none"
              />
              <button className="bg-white text-black px-4 py-2">
                &gt;
              </button>
            </div>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <address className="not-italic text-sm">
              111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh. <br />
              exclusive@gmail.com <br />
              +88015-88888-9999
            </address>
          </div>

          {/* Account Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Login / Register
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Cart
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Download App Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Download App</h3>
            <p className="text-sm mb-4">Save $3 with App New User Only</p>
            <div className="flex items-center mb-4">
              <Image
                src="/Qrcode.png"
                alt="QR Code"
                width={64}
                height={64}
              />
            </div>
            <div className="flex space-x-4 mb-4">
              <Image
                src="/playstore.png"
                alt="Google Play"
                width={120}
                height={40}
              />
              <Image
                src="/download-appstore.png"
                alt="App Store"
                width={120}
                height={40}
              />
            </div>
            <div className="flex space-x-4">
              <Link href="#">
                <Image src="/Icon-facebook.png" alt="Facebook" width={24} height={24} />
              </Link>
              <Link href="#">
                <Image src="/twitter.png" alt="Twitter" width={24} height={24} />
              </Link>
              <Link href="#">
                <Image src="/Icon-instagram.png" alt="Instagram" width={24} height={24} />
              </Link>
              <Link href="#">
                <Image src="/Icon-linkedin.png" alt="LinkedIn" width={24} height={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
          © Copyright Rimel 2022. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
