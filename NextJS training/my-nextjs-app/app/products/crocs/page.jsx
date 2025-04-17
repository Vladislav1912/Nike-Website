'use client'
import React, { useEffect, useState } from 'react'
import ProductItem from '@/app/components/ProductItem';
import SaleOff from '@/app/components/SaleOff';

export default function Crocs() {
  // product, set....
  // api 

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDeleteBtn = async (id) => {
    const resp = await fetch(`/api/products/${id}`, {
      method: 'DELETE',
    })

    if (!resp.ok) {
      alert('NE USPQ')
      return
    }

    alert('product removed')
    setProducts(prev => prev.filter(p => p.id !== id));

  }

  const fetchProducts = async () => {
    try {
      const response = await fetch(`/api/products/getProducts`);
      if (!response.ok) {
        alert('Couldn’t reach the API');
        return;
      }

      const data = await response.json();
      
      console.log(`Detected data: ${data}`);
      console.log(data);
      

      setProducts(data.products);
    }
    catch {
      console.log('Big error');
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, [])

  if (loading) {
    return <div className="flex justify-center items-center py-72"><img src="/loading.gif" className='w-40 h-40' alt="" /></div>
  }

  return (
    <div className='pt-16'>
    <SaleOff/>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 pt-16 bg-white'>
      {products.map(product => (<ProductItem key={product.id} product={product} onDelete={handleDeleteBtn} />))}
    </div>
    </div>
  )
}

// wzimash

// pagejsx
// products - foreach
// product

