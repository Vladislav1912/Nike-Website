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
    <div className="mt-16">
      {isAuthenticated === false ? (
        <div className="flex items-center justify-center min-h-screen bg-gray-100"
          style={{
            backgroundImage: `url(https://image.cnbcfm.com/api/v1/image/107265409-1688135513093-gettyimages-1258511119-AFP_33HH3AZ.jpeg?v=1726778509&w=1920&h=1080)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <form onSubmit={checkPassword} className="bg-white p-6 rounded-lg shadow-md w-96">
            <h2 className="text-xl font-semibold mb-4">Enter Your Password</h2>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full mt-4 bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <>
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
              value={selectedCategoryId}
              onChange={(e) => setSelectedCategoryId(e.target.value)}
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

            <select
              className="w-full p-3 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedModelId}
              onChange={(e) => setSelectedModelId(e.target.value)}
            >
              <option value="">Select Model</option>
              {model.map((model) => (
                <option key={model.id} value={model.id}>
                  {model.name}
                </option>
              ))}
            </select>

            <select
              className="w-full p-3 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedTypeId}
              onChange={(e) => setSelectedTypeId(e.target.value)}
            >
              <option value="">Select Type</option>
              {type.map((typeItem) => (
                <option key={typeItem.id} value={typeItem.id}>
                  {typeItem.name}
                </option>
              ))}
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
            onClick={addProduct}
            type="button"
            className="w-full mt-4 bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Add Product
          </button>
        </>
      )}
    </div>
);
}


