'use client'
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-white text-black py-10">
      <div className="border-t border-gray-400 pt-6">
        <div className="max-w-screen-xl mx-auto px-6">

          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            
            
            <div>
              <h3 className="text-lg text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-gray-400">Find a Store</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-400">Nike Journal</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-400">Become a Member</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-400">Feedback</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-400">Promo Codes</Link>
                </li>
              </ul>
            </div>

            
            <div>
              <h3 className="text-lg  text-white font-semibold mb-4">Help</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-gray-400">Get Help</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-400">Order Status</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-400">Shipping and Delivery</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-400">Returns</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-400">Payment Options</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-400">Contact Us</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-400">Reviews</Link>
                </li>
              </ul>
            </div>

            
            <div>
              <h3 className="text-lg  text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-gray-400">About Nike</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-400">News</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-400">Careers</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-400">Investors</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-400">Sustainability</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-400">Purpose</Link>
                </li>
              </ul>
            </div>
            
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center mt-6 space-x-4">
            <FaFacebook className="text-black hover:text-blue-600 cursor-pointer" size={24} />
            <FaInstagram className="text-black hover:text-pink-500 cursor-pointer" size={24} />
          </div>

        </div>
      </div>
    </div>
  )
}
