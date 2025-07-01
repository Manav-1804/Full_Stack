import React, { useEffect, useState } from 'react'
import Aheader from '../ACommon/Aheader'
import Anav from '../ACommon/Anav'
import axios from 'axios'
import { toast } from 'react-toastify'

function Aboutmanage() {
    const [about, setabout] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/about")
        console.log(res.data)
        setabout(res.data)
    }

    
    const [singlepro, setsinglepro] = useState({
        id: "",
        logo: "",
        title: "",
        img: ""
    })
    const product = async (id) => {
        const res = await axios.get(`http://localhost:3000/about/${id}`)
        console.log(res.data)
        setsinglepro(res.data)
    }

    const deletepro = async (id) => {
        const res = await axios.delete(`http://localhost:3000/about/${id}`)
        // console.log(res.data)
        toast.success("Product delete successfully..!")
        fetchdata()
    }

    return (
        <div>
            <Aheader />
            <Anav title="About Manage" name="About" />
            <div className="container">
                <h1 className='text-center'>Hello this About Manage</h1>
                <table className="table">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#ID</th>
                            <th scope="col">logo</th>
                            <th scope="col">Title</th>
                            <th scope="col">Image</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            about && about.map((data, index) => {
                                console.log(data)
                                return (
                                    <tr className='text-center' key={index}>
                                        <th scope="row">{data.id}</th>
                                         <td>
                                            <img src={data.logo} style={{ width: "70px", height: "70px" }} alt="" />
                                        </td>
                                        <td>{data.title}</td>
                                        <td>
                                            <img src={data.img} style={{ width: "70px", height: "70px" }} alt="" />
                                        </td>
                                       
                                        <td>
                                            <button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => product(data.id)}  >View</button>
                                            <button className='btn btn-success mx-2'>Edit</button>
                                            <button className='btn btn-danger' onClick={() => deletepro(data.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>

                          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <div className="card" style={{ width: "100%" }}>
                                    <img src={singlepro.img} style={{height:"350px"}} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{singlepro.id}</h5>
                                        <h5 className="card-title">{singlepro.title}</h5>
                                        
                                    </div>
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Aboutmanage