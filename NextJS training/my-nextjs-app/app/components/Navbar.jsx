'use client'
import React, { useState } from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { SiNike } from "react-icons/si";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {

    setIsOpen(!isOpen)
  }


  return (
    <nav className="bg-white text-black fixed w-full top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">


          <Link href="/" className="text-7xl font-bold">
            <SiNike />
          </Link>


          <div className="hidden md:flex flex-1 justify-center space-x-6 font-bold ">
            <Link href="#" className="">
              New and Featured
            </Link>
            <Link href="/products/crocs/men" className="">
              Men
            </Link>
            <Link href="/products/crocs/women" className="">
              Women
            </Link>
            <Link href="/products/crocs/kids" className="">
              Kids
            </Link>
            <Link href="#" className="">
              Sale
            </Link>
          </div>


          <div className="flex items-center space-x-4">
            <div className="relative text-gray-600">
              <input
                type="text"
                className="pl-10 pr-4 py-2 border border-gray-300 bg-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <FiSearch />
              </div>
            </div>

            <Link href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-xl hover:text-blue-600" />
            </Link>
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-xl hover:text-purple-600" />
            </Link>
            <Link href="/Private"><button className="bossBtn">BOSS</button></Link>
          </div>
        </div>
      </div >
    </nav >
  );
};

export default Navbar;
