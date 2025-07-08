import React, { useContext } from 'react';
import Mycontext from '../Context/data/Mycontext';
import { Link } from 'react-router-dom';


function Producttable() {
  const context = useContext(Mycontext);

 const  {allProducts} = context

 console.log(allProducts)
  return (
     <div className="container my-5">
      <div className="card shadow">
        <div className="card-body bg-dark text-white d-flex flex-wrap justify-content-between align-items-center">
         
          <div className="d-flex align-items-center gap-2 mb-2 mb-md-0">
            <img src="/img/react.png" alt="React" style={{ width: "36px" }} />
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
              <th scope="col">Product Image</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Category</th>
              <th scope="col">Date</th>
              <th scope="col">Action</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

        </table>
      </div>
    </div>
  );
}

export default Producttable;
