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
            className="buttonDelete"
          >
          <svg viewBox="0 0 448 512" className="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>

          </button>

          <button
            onClick={() => handleEditBtn(product.id)}
            className="buttonEdit"
          >
            <svg className='svgEditIcon' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z" clip-rule="evenodd" />
              <path fill-rule="evenodd" d="M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z" clip-rule="evenodd" />
            </svg>

          </button>
        </div>
      </div>
    </div>

  );
}

