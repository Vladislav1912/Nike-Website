'use client'
import {useState , useEffect}from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ProductItem({ product, onDelete }) {

  console.log(`Product: ${product}`);
  const router = useRouter();
  const handleEditBtn = (id) => {
    router.push(`/products/${id}/edit`);
  }
  return (
    <div className="bg-white  overflow-hidden ">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover"
      />

      <div className="p-4">
        <h3 className="text-md text-gray-900 font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-600">{product?.category?.name ? product.category.name : `No Category`}</p>
        <p className="text-sm text-gray-600">{product?.type?.name ? product.type.name : `No Type`}</p>
        <p className="text-md text-black font-bold mt-1">BGN {product.price}</p>

        <div className="flex gap-2 mt-4">
          <button
            onClick={() => onDelete(product.id)}
            className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm"
          >
            Delete
          </button>

          <button
            onClick={() => handleEditBtn(product.id)}
            className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm"
          >
            Edit
          </button>
        </div>
      </div>
    </div>

  );
}

