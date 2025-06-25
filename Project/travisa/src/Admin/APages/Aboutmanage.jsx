import React, { useEffect, useState } from 'react'
import Aheader from '../ACommon/Aheader'
import Anav from '../ACommon/Anav'
import axios from 'axios'

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

export default Aboutmanage