import React, { useContext } from 'react';
import Mycontext from '../Context/data/Mycontext';
import { Link, useNavigate } from 'react-router-dom';


function Producttable() {
  const context = useContext(Mycontext);
  const navigate = useNavigate()
  const { allProducts, deleteProduct, setEditProductData } = context
  const handleEdit = (data) => {
    setEditProductData(data); // ✅ store the product for update
    navigate('/updateproduct');  // ✅ redirect to form
  };
  console.log(allProducts)
  return (
    <div className="container my-5">
      <div className="card shadow">
        <div className="card-body bg-dark text-white d-flex flex-wrap justify-content-between align-items-center">

          <div className="d-flex align-items-center gap-2 mb-2 mb-md-0">
            {/* <img src="/img/react.png" alt="React" style={{ width: "36px" }} /> */}
            <h5 className="mb-0 fw-semibold">React Firebase CRUD</h5>
          </div>
          <Link to="/addproduct">
            <button className="btn btn-secondary">Add Product</button>
          </Link>
        </div>
      </div>

      <div className="table-responsive mt-4 shadow rounded">
        <table className="table table-bordered table-hover table-dark text-white align-middle">
          <thead className="table-secondary text-dark">
            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Image</th>
              <th scope="col">Company Name </th>
              <th scope="col">Price</th>
              <th scope="col">Size</th>
              <th scope="col">Rating</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.length > 0 ? (
              allProducts.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.shoename}</td>
                  <td>
                    <img src={product.image} alt={product.shoename} width="80" />
                  </td>
                  <td>{product.companyname}</td>
                  <td>{product.price} INR</td>
                  <td>{product.size}</td>

                  <td>{product.rating} ⭐</td>
                  <td>
                    <button to="/updateproduct"
                      onClick={() => handleEdit(product)}
                      className="btn btn-sm btn-success mb-2">
                      Edit
                    </button>

                    <br></br>
                    <Link onClick={() => deleteProduct(product)}
                      className="font-medium bg-red-300 px-4 rounded-lg py-1 text-danger cursor-pointer  ">Delete</Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" style={{ textAlign: "center" }}>
                  No products found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Producttable;
