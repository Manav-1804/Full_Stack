import React, { useContext } from 'react';
import Mycontext from '../Context/data/Mycontext';

function AddProduct() {
  const {
    products,
    setProducts,
    addProduct,
    editProducts,
   
  } = useContext(Mycontext);

  // Check whether we are in edit mode
  const isEditing = !!products.id;

  const handleChange = (e) => {
    setProducts({ ...products, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4">{isEditing ? 'Edit Shoe' : 'Add New Shoe'}</h3>
      <form>
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
          <label className="form-label">Shoe Color</label>
          <input
            type="text"
            className="form-control"
            name="shoecolor"
            value={products.shoecolor}
            onChange={handleChange}
            placeholder="e.g. Red, White"
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

        <button
          type="button"
          className={`btn ${isEditing ? 'btn-warning' : 'btn-primary'} me-2`}
          onClick={isEditing ? editProducts : addProduct}
        >
          {isEditing ? 'Update Product' : 'Add Product'}
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
