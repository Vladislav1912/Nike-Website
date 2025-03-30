import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-black text-white fixed w-full top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          
          <Link href="/" className="text-xl font-bold">
            <img
              src="https://media.about.nike.com/image-downloads/cf68f541-fc92-4373-91cb-086ae0fe2f88/002-nike-logos-swoosh-white.jpg"
              alt="Nike Logo"
              className="h-10"
            />
          </Link>

          
          <div className="hidden md:flex flex-1 justify-center space-x-6 font-bold ">
            <Link href="#" className="hover:text-gray-400">
              New and Featured
            </Link>
            <Link href="#" className="hover:text-gray-400">
              Men
            </Link>
            <Link href="#" className="hover:text-gray-400">
              Women
            </Link>
            <Link href="#" className="hover:text-gray-400">
              Kids
            </Link>
            <Link href="#" className="hover:text-gray-400">
              Sale
            </Link>
          </div>

          
          <div className="flex items-center space-x-4">
            <input
              type="text"
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search"
            />
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-xl hover:text-gray-400" />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-xl hover:text-gray-400" />
            </Link>
            <Link href="/Private"><button className="rounded-lg border p-2">Boss Btn</button></Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
