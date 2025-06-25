import React from 'react'
import Aheader from '../ACommon/Aheader'
import Anav from '../ACommon/Anav'
import { useState,useEffect} from 'react'
import axios from 'axios'
function Servicemanage() {
    const [services, setservices] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    // all product
    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/services")
        // console.log(res.data)
        setservices(res.data)
    }
  return (
    <div>

        <Aheader />
        <Anav title="Service Manage" name="Service"/>

         <div className="container">
                <h1 className='text-center'>Hello this Service Manage</h1>
                <table className="table">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#ID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Image</th>
                            <th scope="col">desc</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            services && services.map((data, index) => {
                                console.log(data)
                                return (
                                    <tr className='text-center' key={index}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.title}</td>
                                        <td>
                                            <img src={data.image} style={{ width: "70px", height: "70px" }} alt="" />
                                        </td>
                                        <td>{data.desc}</td>
                                        <td>
                                            <button className='btn btn-info'  >View</button>
                                            <button className='btn btn-success mx-2'>Edit</button>
                                            <button className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>

        
    
         </div>
    </div>
  )
}

export default Servicemanage