import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Usecard1() {

  const [product,setdata] = useState([])
  
  useEffect(()=>{
    fetchdata()
  },[])

  const fetchdata=async()=>{
    const res = await axios.get("https://fakestoreapi.in/api/products")
    console.log(res.product)
    setdata(res.product)
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          {
            product && product.map((products,index)=>{
              console.log(products)
              const {image,id,title,price} =products
              return(
                <div className="col-md-4" key={index}>
                  <div className="card" style={{ width: '18rem' }}>
                    <img src={image} style={{height:"300px"}} className="card-img-top" alt="..." />
                    <div className="card-body">
                       <h5 className="card-title">{id}</h5>
                      <h5 className="card-title">{title}</h5>
                          <h5 className="card-title">{price} $</h5>
                      
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Usecard1