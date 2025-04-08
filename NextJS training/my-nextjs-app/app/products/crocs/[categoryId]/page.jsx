'use client'

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import ProductItem from '@/app/components/ProductItem'
export default function page() {
    const params = useParams()
    const categoryId = params.categoryId;
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchProducts();
    }, [])


    const fetchProducts = async () => {
        try {
            const response = await fetch(`/api/products/getProductsByCategory?categoryId=${categoryId}`);

            if (!response.ok) {
                alert('Couldn’t reach the API');
                return;
            }

            const data = await response.json();

            console.log(data);


            setProducts(data.products.products);
        }
        catch {
            console.log('Big error');
        } finally {
            setLoading(false);
        }
    }
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}
