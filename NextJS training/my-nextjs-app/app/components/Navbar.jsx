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
    <nav className="bg-white text-black fixed w-full top-0 z-50 shadow-md">
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

            <button
              type="button"
              className="inline-flex justify-center w-full
                               rounded-md border border-gray-300
                               shadow-sm px-4 py-2 bg-white text-sm
                               font-medium text-black hover:bg-gray-50"
              onClick={toggleDropdown}
            >
              
              <FiSearch className="ml-2" />
            </button>

            {/* Dropdown menu */}
            {isOpen && (
              <div className="origin-top-right absolute
                                    right-0 mt-2 w-56 rounded-md
                                    shadow-lg bg-white ring-1 ring-black
                                    ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2
                                               text-sm text-black
                                               hover:bg-gray-100"
                    onClick={() => alert('abi')}
                  >
                    mishirt
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2
                                               text-sm text-black
                                               hover:bg-gray-100"
                    onClick={() => alert('tshirt')}
                  >
                    tshirt
                  </a>
                </div>
              </div>
            )}
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
            <Link href="/Private"><button className="rounded-lg border p-2">Boss Btn</button></Link>
          </div>
        </div>
      </div >
    </nav >
  );
};

export default Navbar;
