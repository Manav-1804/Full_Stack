

import axios from 'axios'
import Aheader from '../ACommon/Aheader'
import Anav from '../ACommon/Anav'
import { useEffect, useState } from 'react'
function Trainingmanage() {
    const [train, settrain] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/training")
        console.log(res.data)
        settrain(res.data)
    }

    const [doublepro, setdoublepro] = useState({
        id: "",
        title: "",
        img: "",
        desc: ""
    })

    const product = async (id) => {
        const res = await axios.get(`http://localhost:3000/training/${id}`)
        console.log(res.data)
        setdoublepro(res.data)
    }


    return (
        <div>
            <Aheader />
            <Anav title="Training Manage" name="Training" />
            <div className="container py-5">
                <h1 className='text-center'>Hello this Trining Manage</h1>
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
                            train && train.map((data, index) => {
                                console.log(data)
                                return (
                                    <tr className='text-center' key={index}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.title}</td>
                                        <td>
                                            <img src={data.img} style={{ width: "70px", height: "70px" }} alt="" />
                                        </td>
                                        <td>{data.desc}</td>
                                        <td>
                                            <button className='btn btn-info'  data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => product(data.id)}>View</button>
                                            <button className='btn btn-success mx-2'>Edit</button>
                                            <button className='btn btn-danger'>Delete</button>
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
                                    <img src={doublepro.img} style={{ height: "250px" }} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{doublepro.id}</h5>
                                        <h5 className="card-title">{doublepro.title}</h5>
                                        <p className="card-text">{doublepro.desc}</p>
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

export default Trainingmanage