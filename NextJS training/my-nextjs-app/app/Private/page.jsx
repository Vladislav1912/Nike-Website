'use client'
import React, { useState, useEffect } from "react";

export default function PasswordForm() {

  useEffect(() => {
    getCat();
    getTypes();
    getModels();
  }, []);

  const getTypes = () => {
    fetch("/api/products/types")
      .then(res => res.json())
      .then(data => setType(data));
  }
  const getCat = () => {
    fetch("/api/products/categories")
      .then(res => res.json())
      .then(data => setCategories(data));
  }

  const getModels = () => {
    fetch("/api/products/models")
      .then(res => res.json())
      .then(data => setModel(data));
  }


  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const currentPassword = 'vladko';

  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [type, setType] = useState([]);
  const [selectedTypeId, setSelectedTypeId] = useState('');
  const [model, setModel] = useState([]);
  const [selectedModelId, setSelectedModelId] = useState('');

  const [productImage, setProductImage] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productColor, setProductColor] = useState('RED');
  const [productSize, setProductSize] = useState('SMALL');


  function checkPassword(e) {
    e.preventDefault();
    if (password !== currentPassword) {
      alert('Wrong pass boss!');
      return;
    }
    setIsAuthenticated(true);
  }


  const addProduct = async () => {
    const formData = new FormData();
    formData.append('categoryId', selectedCategoryId);
    formData.append('typeId', selectedTypeId);
    formData.append('modelId', selectedModelId);
    formData.append('name', productName);
    formData.append('image', productImage); 
    formData.append('price', productPrice);
    formData.append('quantity', productQuantity);
    formData.append('size', productSize);
    formData.append('color', productColor);
  
    const resp = await fetch('/api/products/addProducts', {
      method: 'POST',
      body: formData,
    });
  
    if (resp.ok) {
      setProductColor("RED");
      setProductImage("");
      setProductName("");
      setProductPrice("");
      setProductQuantity("");
      setProductSize("SMALL");
  
      alert('Product added successfully!');
    }
  
    const data = await resp.json();
    console.log(data);
  };
  

  return (
    <div className="flex h-[1000px] items-center">
      {isAuthenticated === false ? (
        <div className="flex items-center justify-center min-h-screen bg-gray-100"
          style={{
            backgroundImage: `url(https://www.zastavki.com/pictures/1920x1080/2014/Brands_Nike_logo_on_a_black_background_086037_23.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <form onSubmit={checkPassword} className="bg-white p-6 rounded-lg shadow-md w-96 text-center text-black">
            <h2 className="text-xl font-semibold mb-4">Enter Your Password</h2>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
              ></button>
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-black text-white p-3 rounded-lg hover:bg-gray-400 hover:text-black transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <>
            <div className="bg-[#1a1f2b] p-8 rounded-lg text-white max-w-4xl mx-auto my-14">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <input
                  type="text"
                  placeholder="Product Name"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="w-full bg-transparent border-b border-gray-500 py-2 focus:outline-none"
                />

                <input
                  type="text"
                  placeholder="Price"
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                  className="w-full bg-transparent border-b border-gray-500 py-2 focus:outline-none"
                />

                <input
                  type="number"
                  placeholder="Quantity"
                  value={productQuantity}
                  onChange={(e) => setProductQuantity(e.target.value)}
                  className="w-full bg-transparent border-b border-gray-500 py-2 focus:outline-none"
                />

                <input
                  type="text"
                  placeholder="Image URL"
                  value={productImage}
                  onChange={(e) => setProductImage(e.target.value)}
                  className="w-full bg-[#1a1f2b] text-white border-b border-gray-500 py-2 focus:outline-none"
                />

                <select
                  value={selectedCategoryId}
                  onChange={(e) => setSelectedCategoryId(e.target.value)}
                  className="w-full bg-[#1a1f2b] text-white border-b border-gray-500 py-2 focus:outline-none"
                >
                  <option value="">Select Category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedModelId}
                  onChange={(e) => setSelectedModelId(e.target.value)}
                  className="w-full bg-[#1a1f2b] text-white border-b border-gray-500 py-2 focus:outline-none"
                >
                  <option value="">Select Model</option>
                  {model.map((model) => (
                    <option key={model.id} value={model.id}>
                      {model.name}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedTypeId}
                  onChange={(e) => setSelectedTypeId(e.target.value)}
                  className="w-full bg-[#1a1f2b] text-white border-b border-gray-500 py-2 focus:outline-none"
                >
                  <option value="">Select Type</option>
                  {type.map((typeItem) => (
                    <option key={typeItem.id} value={typeItem.id}>
                      {typeItem.name}
                    </option>
                  ))}
                </select>

                <select
                  value={productColor}
                  onChange={(e) => setProductColor(e.target.value)}
                  className="w-full bg-[#1a1f2b] text-white border-b border-gray-500 py-2 focus:outline-none"
                >
                  <option value="">Select Color</option>
                  <option value="RED">RED</option>
                  <option value="BLACK">BLACK</option>
                  <option value="BLUE">BLUE</option>
                  <option value="GREEN">GREEN</option>
                  <option value="WHITE">WHITE</option>
                </select>

                <select
                  value={productSize}
                  onChange={(e) => setProductSize(e.target.value)}
                  className="w-full bg-[#1a1f2b] text-white border-b border-gray-500 py-2 focus:outline-none"
                >
                  <option value="">Select Size</option>
                  <option value="SMALL">SMALL</option>
                  <option value="MEDIUM">MEDIUM</option>
                  <option value="LARGE">LARGE</option>
                  <option value="XL">XL</option>
                </select>
              </div>

              <button
                onClick={addProduct}
                type="button"
                className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-200"
              >
                Add Product
              </button>
            </div>

        </>
      )}
    </div>
);
}


