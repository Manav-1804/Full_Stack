// UpdateProduct.jsx
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Mycontext from '../Context/data/Mycontext';

function UpdateProduct() {
  const { editProducts, editProductData, setEditProductData } = useContext(Mycontext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    companyname: '',
    shoename: '',
    image: '',
    price: '',
    size: '',
    rating: '',
  });

  useEffect(() => {
    let productToEdit = editProductData;

    if (!productToEdit) {
      const saved = localStorage.getItem('editProduct');
      if (saved) {
        productToEdit = JSON.parse(saved);
        setEditProductData(productToEdit);
      }
    }

    if (!productToEdit) {
      alert('No product selected for update');
      navigate('/');
      return;
    }

    setFormData({
      id: productToEdit.id,
      companyname: productToEdit.companyname || '',
      shoename: productToEdit.shoename || '',
      image: productToEdit.image || '',
      price: productToEdit.price || '',
      size: productToEdit.size || '',
      rating: productToEdit.rating || '',
    });
  }, [editProductData, navigate, setEditProductData]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await editProducts(formData);
    localStorage.removeItem('editProduct');
    alert('Product updated!');
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleUpdate} className="bg-gray-800 p-6 rounded-lg w-96">
        <h2 className="text-white text-xl font-bold mb-4">Update Product</h2>
        {['companyname', 'shoename', 'image', 'price', 'size', 'rating'].map((field) => (
          <div key={field} className="mb-4">
            <input
              type={field === 'price' || field === 'rating' ? 'number' : 'text'}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              required
              className="w-full px-3 py-2 rounded bg-gray-600 text-dark"
            />
          </div>
        ))}
        <button to="/"type="submit" className="w-full bg-orange-500 text-dark font-bold py-2 rounded">
          Update Product
        </button>
      </form>
    </div>
  );
}

export default UpdateProduct;
