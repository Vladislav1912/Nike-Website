'use client'
import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'

export default function page() {
  const { id } = useParams()
  const router = useRouter()

  const [productImage, setProductImage] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productColor, setProductColor] = useState('');
  const [productSize, setProductSize] = useState('');

  const [productCategoryId, setProductCategoryId] = useState('');  
  const [productModelId, setProductModelId] = useState('');  
  const [productTypeId, setProductTypeId] = useState('');

  const [categories, setCategories] = useState([]); 
  const [model, setModel] = useState([]); 
  const [type, setType] = useState([]); 

  const fetchProduct = async () => {
    try {
      const resp = await fetch(`/api/products/getById/${id}`);
      if (resp.ok) {
        const data = await resp.json();
        const product = data.product;
        setProductName(product.name);
        setProductPrice(product.price);
        setProductQuantity(product.quantity);
        setProductColor(product.color);
        setProductSize(product.size);
        setProductImage(product.image);
      }
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const resp = await fetch('/api/products/categories'); 
      if (resp.ok) {
        const data = await resp.json();
        setCategories(data.categories || []); 
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchModels = async () => {
    try {
      const resp = await fetch('/api/products/models'); 
      if (resp.ok) {
        const data = await resp.json();
        setModel(data.models || []); 
      }
    } catch (error) {
      console.error("Error fetching models:", error);
    }
  };

  const fetchTypes = async () => {
    try {
      const resp = await fetch('/api/products/types'); 
      if (resp.ok) {
        const data = await resp.json();
        setType(data.types || []); 
      }
    } catch (error) {
      console.error("Error fetching types:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
    fetchCategories();
    fetchModels();
    fetchTypes();
  }, []);

  const handleEditBtn = async () => {
    const updatedProduct = {
      id,
      name: productName,
      price: productPrice,
      quantity: productQuantity,
      color: productColor,
      size: productSize,
      image: productImage,
    };

    try {
      const resp = await fetch(`/api/products/editProducts`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
      });
      if (resp.ok) {
        alert("Product updated successfully!");
        router.push("/products/crocs"); 
      } else {
        alert("Failed to update product.");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div>
      <div>
        <select
          className="w-full p-3 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={productCategoryId}
          onChange={(e) => setProductCategoryId(e.target.value)}
        >
          <option value="">Select Category</option>
          {categories.length > 0 ? (
            categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))
          ) : (
            <option>No categories available</option>
          )}
        </select>
      </div>

      <div className="relative text-black">
        <input
          type="text"
          className="w-full p-3 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="text"
          className="w-full p-3 mb-5 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={productPrice}
          placeholder="Price"
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <input
          type="number"
          className="w-full p-3 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Quantity"
          value={productQuantity}
          onChange={(e) => setProductQuantity(e.target.value)}
        />

        <select
          className="w-full p-3 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={productModelId}
          onChange={(e) => setProductModelId(e.target.value)}
        >
          <option value="">Select Model</option>
          {model.length > 0 ? (
            model.map((modelItem) => (
              <option key={modelItem.id} value={modelItem.id}>
                {modelItem.name}
              </option>
            ))
          ) : (
            <option>No models available</option>
          )}
        </select>

        <select
          className="w-full p-3 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={productTypeId}
          onChange={(e) => setProductTypeId(e.target.value)}
        >
          <option value="">Select Type</option>
          {type.length > 0 ? (
            type.map((typeItem) => (
              <option key={typeItem.id} value={typeItem.id}>
                {typeItem.name}
              </option>
            ))
          ) : (
            <option>No types available</option>
          )}
        </select>

        <select
          className="w-full p-3 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={productColor}
          onChange={(e) => setProductColor(e.target.value)}
        >
          <option value="RED">RED</option>
          <option value="BLACK">BLACK</option>
          <option value="BLUE">BLUE</option>
          <option value="GREEN">GREEN</option>
          <option value="WHITE">WHITE</option>
        </select>

        <select
          className="w-full p-3 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={productSize}
          onChange={(e) => setProductSize(e.target.value)}
        >
          <option value="SMALL">SMALL</option>
          <option value="MEDIUM">MEDIUM</option>
          <option value="LARGE">LARGE</option>
          <option value="XL">XL</option>
        </select>

        <input
          type="text"
          className="w-full p-3 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Image URL"
          value={productImage}
          onChange={(e) => setProductImage(e.target.value)}
        />
      </div>

      <button
        onClick={handleEditBtn}
        type="button"
        className="w-full mt-4 bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Submit Edited Product
      </button>
    </div>
  )
}
