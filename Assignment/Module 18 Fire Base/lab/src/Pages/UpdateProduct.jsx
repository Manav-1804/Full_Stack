import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Mycontext from '../Context/data/Mycontext';

function UpdateProduct() {
  const { editProducts ,products,setProducts} = useContext(Mycontext);
  const navigate = useNavigate();

  // const [formData, setFormData] = useState({
  //   companyname: '',
  //   shoename: '',
  //   image: '',
  //   price: '',
  //   size: '',
  //   rating: ''
  // });

  // const [isReady, setIsReady] = useState(false); // ✅ form render flag

  // useEffect(() => {
  //   if (!editProductData) {
  //     navigate('/');
  //     return;
  //   }

  //   setFormData({
  //     companyname: editProductData.companyname || '',
  //     shoename: editProductData.shoename || '',
  //     image: editProductData.image || '',
  //     price: editProductData.price || '',
  //     size: editProductData.size || '',
  //     rating: editProductData.rating || ''
  //   });

  //   setIsReady(true);
  // }, [editProductData, navigate]);

  // const handleUpdate = () => {
  //   editProducts(formData);
  // };

  // if (!isReady) return null; // prevent crash
 const handleChange = (e) => {
    setProducts({ ...products, [e.target.name]: e.target.value });
  };
  return (
    <div className='flex justify-center items-center h-screen'>
      {/* <div className='bg-gray-800 px-8 py-8 rounded-xl w-80 lg:w-96'>
        <div className="flex space-x-2 items-center mb-4">
          <Link to={'/'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
              className="w-6 h-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </Link>
          <h1 className='text-center text-white text-xl font-bold'>Update Product</h1>
        </div>

        {['companyname', 'shoename', 'image', 'price', 'size', 'rating'].map((field) => (
          <div key={field}>
            <input
              type="text"
              value={formData[field]}
              onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
              className='bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-white placeholder:text-gray-200 outline-none'
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            />
          </div>
        ))}

        <div className='flex justify-center mb-3'>
          <button
            onClick={handleUpdate}
            className='bg-orange-500 w-full text-white font-bold px-2 py-2 rounded-lg'
          >
            Update Product
          </button>
        </div>
      </div> */}
       <form >
        <div className="mb-3">
          <label className="form-label">Company Name</label>
          <input
            type="text"
            className="form-control"
            name="companyname"
            value={products.companyname}
            onChange={handleChange}
            placeholder="e.g. Nike"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Shoe Name</label>
          <input
            type="text"
            className="form-control"
            name="shoename"
            value={products.shoename}
            onChange={handleChange}
            placeholder="e.g. Air Max"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            type="text"
            className="form-control"
            name="image"
            value={products.image}
            onChange={handleChange}
            placeholder="https://..."
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={products.price}
            onChange={handleChange}
            placeholder="e.g. 2999"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Size</label>
          <input
            type="text"
            className="form-control"
            name="size"
            value={products.size}
            onChange={handleChange}
            placeholder="e.g. 9, 10, M, L"
          />
        </div>

        

        <div className="mb-3">
          <label className="form-label">Rating</label>
          <input
            type="number"
            step="0.1"
            max="5"
            min="1"
            className="form-control"
            name="rating"
            value={products.rating}
            onChange={handleChange}
            placeholder="e.g. 4.5"
          />
        </div>

        <button onClick={editProducts}>UPDATE DATA</button>

        {/* <button
          type="button"
          className={`btn ${isEditing ? 'btn-warning' : 'btn-primary'} me-2`}
          onClick={isEditing ? editProducts : addProduct}
        >
          {isEditing ? 'Update Product' : 'Add Product'}
        </button> */}
      </form>
           
    </div>
  );
}

export default UpdateProduct;
